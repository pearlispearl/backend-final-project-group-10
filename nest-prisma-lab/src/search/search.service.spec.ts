import { Test, TestingModule } from '@nestjs/testing';
import { SearchService } from './search.service';
import { PrismaService } from '../prisma/prisma.service';

describe('SearchService', () => {
  let service: SearchService;
  let prisma: PrismaService;

  const mockPrisma = {
    rooms: { findMany: jest.fn() },
    bookings: { findFirst: jest.fn() },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SearchService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<SearchService>(SearchService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should exclude rooms that have an overlapping booking', async () => {
    const dto: any = { 
      start_date: new Date('2026-05-01'), 
      end_date: new Date('2026-05-05'),
      min_capacity: 1, max_capacity: 10
    };

    // Mock finding one room
    mockPrisma.rooms.findMany.mockResolvedValue([
      { id: 1, name: 'Room 101', is_active: true, capacity: 2 }
    ]);

    // Mock that a booking ALREADY exists for these dates (Conflict)
    mockPrisma.bookings.findFirst.mockResolvedValue({ id: 99, room_id: 1 });

    const result = await service.search(dto);

    // The result should be empty because the only room is booked
    expect(result).toHaveLength(0);
    expect(mockPrisma.bookings.findFirst).toHaveBeenCalled();
  });

it('should return available rooms when no conflict exists', async () => {
  const dto: any = { start_date: new Date(), end_date: new Date(), min_capacity: 1, max_capacity: 10 };
  
  mockPrisma.rooms.findMany.mockResolvedValue([{ id: 1, name: 'Room 101', is_active: true, capacity: 2 }]);
  mockPrisma.bookings.findFirst.mockResolvedValue(null); // No conflict found!

  const result = await service.search(dto);

  expect(result).toHaveLength(1);
  expect(result[0].name).toBe('Room 101');
});

it('should exclude rooms that are inactive', async () => {
  const dto: any = { start_date: new Date(), end_date: new Date(), min_capacity: 1, max_capacity: 10 };
  
  // Note: Our service now filters is_active in the Prisma query, 
  // so we test that Prisma is called with the right where clause.
  mockPrisma.rooms.findMany.mockResolvedValue([]); 

  const result = await service.search(dto);

  expect(result).toHaveLength(0);
  expect(mockPrisma.rooms.findMany).toHaveBeenCalledWith(expect.objectContaining({
    where: expect.objectContaining({
      AND: expect.arrayContaining([{ is_active: true }])
    })
  }));
});
});