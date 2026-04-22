import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchQueryDto } from './dto/search-query.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime/client';

@Controller('search')
@UseInterceptors(CacheInterceptor)
@ApiTags('search')
// Conscious decision not to require login. I'd be unwilling to use a service that requires me to log in to search.
export class SearchController {
  constructor(private readonly search: SearchService) { }

  @ApiOperation({ summary: "Retrieve all rooms that pass the search query" })
  @ApiResponse({
    status: 200,
    description: 'List of all rooms that fit criteria',
    schema: {
      type: 'object',
      properties: {
        data: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number', example: 1 },
              name: { type: 'string', example: 'Deluxe Room 201' },
              description: { type: 'string', example: 'Deluxe room with city view' },
              capacity: { type: 'number', example: 2 },
              price_per_night: { type: 'number', example: 2800 },
              image_url: { type: 'string', example: '/images/room201.jpg' },
              is_active: { type: 'boolean', example: true },
              created_at: { type: 'string', example: '2026-03-20T01:02:55.000Z' },
              updated_at: { type: 'string', example: '2026-03-20T01:02:55.000Z' },
            },
          },
        },
        total: { type: 'number', example: 5 },
        limit: { type: 'number', example: 10 },
        offset: { type: 'number', example: 0 },
      },
    },
  })
  @ApiQuery({ name: 'name', required: false, type: String, description: 'Partial or full name of the room', example: 'simple' })
  @ApiQuery({ name: 'description', required: false, type: String, description: 'Partial or full description of the room', example: 'amenities' })
  @ApiQuery({ name: 'min_capacity', required: false, type: Number, description: 'Minimum acceptable capacity the room should have', example: 1 })
  @ApiQuery({ name: 'max_capacity', required: false, type: Number, description: 'Maximum acceptable capacity the room should have', example: 10 })
  @ApiQuery({ name: 'min_price_per_night', required: false, type: Decimal, description: 'Minimum acceptable price of the room', example: Decimal(1000) })
  @ApiQuery({ name: 'max_price_per_night', required: false, type: Decimal, description: 'Maximum acceptable price of the room', example: Decimal(10000) })
  @ApiQuery({ name: 'start_date', required: true, type: Date, description: 'Start of the date range the room needs to be available', example: '2027-12-24T00:00:00.000Z' })
  @ApiQuery({ name: 'end_date', required: true, type: Date, description: 'End of the date range the room needs to be available', example: '2028-01-01T08:00:00.000Z' })
  @ApiResponse({ status: 429, description: 'Too Many Requests' })
  @Get()
  async get(@Query() dto: SearchQueryDto) {   
    return await this.search.search(dto);
  }
}
