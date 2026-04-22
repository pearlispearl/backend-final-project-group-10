import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

describe('Notifications Flow (e2e)', () => {
    let app: INestApplication;
    let prisma: PrismaService;
    let jwtService: JwtService;
    let accessToken: string;
    let userId: number;

    jest.setTimeout(60000);

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).overrideProvider('CACHE_MANAGER')
            .useValue({
                get: () => Promise.resolve(null),
                set: () => Promise.resolve(),
                del: () => Promise.resolve(),
            })
            .compile();

        app = moduleFixture.createNestApplication();
        app.useGlobalPipes(new ValidationPipe({ transform: true }));
        prisma = moduleFixture.get<PrismaService>(PrismaService);
        jwtService = moduleFixture.get<JwtService>(JwtService);
        await app.init();

        // 1. Setup: Create a test user
        const user = await prisma.users.upsert({
            where: { name: 'notif_test_user' },
            update: {},
            create: {
                name: 'notif_test_user',
                password: 'hashedpassword',
                role: 'USER',
            },
        });
        userId = user.id;

        // 2. Generate valid JWT for the user
        accessToken = jwtService.sign(
            { sub: user.id, username: user.name, role: user.role },
            { secret: process.env.JWT_SECRET || 'test_secret' } // Use your actual env key or a fallback
        );
        // 3. Seed test notifications
        await prisma.notifications.createMany({
            data: [
                { user_id: userId, title: 'Notif 1', message: 'Msg 1', type: 'CREATED', is_read: false },
                { user_id: userId, title: 'Notif 2', message: 'Msg 2', type: 'CANCELLED', is_read: true },
            ],
        });
    });


    afterAll(async () => {
        try {
            await prisma.notifications.deleteMany({ where: { user_id: userId } });
            await prisma.users.delete({ where: { id: userId } });
            await prisma.$disconnect();
        } catch {
            // ignore cleanup errors
        } finally {
            await app.close();
        }
    });


    describe('GET /notifications/me', () => {
        it('should return 401 or 403 if not authenticated', async () => {
            const response = await request(app.getHttpServer()).get('/notifications/me');
            // Some NestJS configurations return 403 when a required Role is missing due to no user
            expect([401, 403]).toContain(response.status);
        });

        it('should return list of notifications for the current user', async () => {
            const response = await request(app.getHttpServer())
                .get('/notifications/me')
                .set('Authorization', `Bearer ${accessToken}`)
                .query({ page: 1, limit: 10 });

            expect(response.status).toBe(200);
            expect(response.body.data.length).toBeGreaterThanOrEqual(2);
            expect(response.body.pagination).toBeDefined();
            expect(response.body.data[0].user_id).toBe(userId);
        });

        it('should filter unread notifications only', async () => {
            const response = await request(app.getHttpServer())
                .get('/notifications/me')
                .set('Authorization', `Bearer ${accessToken}`)
                .query({ unreadOnly: true });

            expect(response.status).toBe(200);
            // Based on our seed, only 1 should be unread
            const allUnread = response.body.data.every((n: any) => n.is_read === false);
            expect(allUnread).toBe(true);
        });
    });

    describe('PATCH /notifications/:id/read', () => {
        it('should mark a notification as read', async () => {
            const notif = await prisma.notifications.findFirst({
                where: { user_id: userId, is_read: false },
            });

            const response = await request(app.getHttpServer())
                .patch(`/notifications/${notif?.id}/read`)
                .set('Authorization', `Bearer ${accessToken}`);

            expect(response.status).toBe(200);
            expect(response.body.is_read).toBe(true);
            expect(response.body.read_at).toBeDefined();
        });
    });
});