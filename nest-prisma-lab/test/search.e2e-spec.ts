import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
import { CacheModule } from '@nestjs/cache-manager';

describe('Search Flow (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  jest.setTimeout(60000);

beforeAll(async () => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  })
    .overrideProvider('CACHE_MANAGER')
    .useValue({ 
      get: () => Promise.resolve(null), 
      set: () => Promise.resolve(), 
      del: () => Promise.resolve() 
    })
    .compile();

  app = moduleFixture.createNestApplication();
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.init();
  prisma = moduleFixture.get<PrismaService>(PrismaService);

const testRoom = await prisma.rooms.findFirst({ where: { name: 'E2E Search Room' } });
  if (!testRoom) {
    await prisma.rooms.create({
      data: { name: 'E2E Search Room', capacity: 4, price_per_night: 1500 },
    });
  }
});

 afterAll(async () => {
  try {
    await prisma.rooms.deleteMany({ where: { name: 'E2E Search Room' } });
    await prisma.$disconnect();
  } catch {
    // ignore cleanup errors
  } finally {
    await app.close();
  }
});

  describe('/search (GET)', () => {
    it('should return 200 and include available rooms for valid dates', async () => {
      const response = await request(app.getHttpServer())
        .get('/search')
        .query({
          start_date: '2026-12-01T00:00:00.000Z',
          end_date: '2026-12-05T00:00:00.000Z',
          min_capacity: 1,
        });

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      // Verify our created room is in the list
      expect(response.body.some((r: any) => r.name === 'E2E Search Room')).toBe(true);
    });

    it('should exclude rooms that have an overlapping CONFIRMED booking', async () => {
      const room = await prisma.rooms.findFirst({ where: { name: 'E2E Search Room' } });
      
      // Create a booking that overlaps with the search dates
      await prisma.bookings.create({
        data: {
          room_id: room!.id,
          user_id: 1, // Assumes a valid user ID 1 exists in your DB
          start_date: new Date('2026-12-01'),
          end_date: new Date('2026-12-10'),
          status: 'APPROVED'
        }
      });

      const response = await request(app.getHttpServer())
        .get('/search')
        .query({
          start_date: '2026-12-05T00:00:00.000Z', // This date is inside the booking range
          end_date: '2026-12-06T00:00:00.000Z',
        });

      // Cleanup the temporary booking immediately
      await prisma.bookings.deleteMany({ where: { room_id: room!.id } });

      expect(response.status).toBe(200);
      // The room MUST NOT be in the results because of the conflict
      expect(response.body.some((r: any) => r.name === 'E2E Search Room')).toBe(false);
    });
  });
});