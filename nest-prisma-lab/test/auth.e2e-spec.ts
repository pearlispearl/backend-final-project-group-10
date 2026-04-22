import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';

describe('AuthController (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).overrideProvider('CACHE_MANAGER')        
      .useValue({
        get: () => Promise.resolve(null),
        set: () => Promise.resolve(),
        del: () => Promise.resolve(),
      }).compile();

    app = moduleFixture.createNestApplication();
    
    // Crucial: Use ValidationPipe to test DTO constraints during E2E
    app.useGlobalPipes(new ValidationPipe());
    
    await app.init();
    prisma = moduleFixture.get<PrismaService>(PrismaService);

    // Cleanup: Remove the test user if it exists from previous runs
    await prisma.users.deleteMany({
      where: { name: 'e2e_tester' },
    });
  });

  afterAll(async () => {
    await app.close();
  });

  describe('Authentication Lifecycle', () => {
    const testUser = {
      username: 'e2e_tester',
      password: 'password123',
      role: 'USER',
    };

    it('/auth/register (POST) - should register a new user', async () => {
      const response = await request(app.getHttpServer())
        .post('/auth/register')
        .send(testUser)
        .expect(201);

      expect(response.body.name).toBe(testUser.username);
      expect(response.body).not.toHaveProperty('password', testUser.password); // Verify security
    });

    it('/auth/register (POST) - should fail for duplicate username (NFR-13)', async () => {
      await request(app.getHttpServer())
        .post('/auth/register')
        .send(testUser)
        .expect(406); // NotAcceptableException
    });

    it('/auth/login (POST) - should return an access token for valid credentials', async () => {
      const response = await request(app.getHttpServer())
        .post('/auth/login')
        .send({
          username: testUser.username,
          password: testUser.password,
        })
        .expect(201);

      expect(response.body).toHaveProperty('access_token');
      expect(typeof response.body.access_token).toBe('string');
    });

    it('/auth/login (POST) - should fail with wrong password', async () => {
      await request(app.getHttpServer())
        .post('/auth/login')
        .send({
          username: testUser.username,
          password: 'wrong_password',
        })
        .expect(401); // UnauthorizedException
    });

    it('/auth/login (POST) - should fail for non-existent user', async () => {
      await request(app.getHttpServer())
        .post('/auth/login')
        .send({
          username: 'ghost_user',
          password: 'password123',
        })
        .expect(404); // NotFoundException
    });
  });
});