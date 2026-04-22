import { Test, TestingModule } from '@nestjs/testing';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { PrismaService } from '../prisma/prisma.service';

describe('SearchController Integration', () => {
  let controller: SearchController;
  let service: SearchService;

  const mockSearchService = {
    search: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchController],
      providers: [
        { provide: SearchService, useValue: mockSearchService },
        { provide: PrismaService, useValue: {} },
        { provide: 'CACHE_MANAGER', useValue: {} },
      ],
    }).compile();

    controller = module.get<SearchController>(SearchController);
    service = module.get<SearchService>(SearchService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call service.search with correct parameters', async () => {
  const mockRooms = [{ id: 1, name: 'Deluxe Room' }];
  mockSearchService.search.mockResolvedValue(mockRooms);

  const dto = {
    name: 'Deluxe',
    description: '',
    min_capacity: 1,
    max_capacity: 5,
    start_date: new Date('2026-05-01'),
    end_date: new Date('2026-05-05'),
    min_price_per_night: undefined,
    max_price_per_night: undefined,
  };

  const result = await controller.get(dto as any);

  expect(result).toEqual(mockRooms);
  expect(service.search).toHaveBeenCalledWith(expect.objectContaining({
    name: 'Deluxe',
    min_capacity: 1,
    start_date: dto.start_date,
  }));
});
  it('should handle partial queries with only required dates', async () => {
  mockSearchService.search.mockResolvedValue([]);

  const dto = {
    start_date: new Date('2026-06-01'),
    end_date: new Date('2026-06-10'),
  };

  const result = await controller.get(dto as any);

  expect(result).toEqual([]);
  expect(service.search).toHaveBeenCalledWith(expect.objectContaining({
    start_date: dto.start_date,
    end_date: dto.end_date,
  }));
});
});