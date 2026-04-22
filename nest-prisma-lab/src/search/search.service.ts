import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SearchQueryDto } from './dto/search-query.dto';
import { rooms } from '@prisma/client';

@Injectable()
export class SearchService {
  constructor(private readonly prisma: PrismaService) {}

  async search(dto: SearchQueryDto) {
    //  Fetch rooms matching basic numeric/Prisma-compatible filters
    const rooms = await this.prisma.rooms.findMany({
      where: {
        AND: [
          { capacity: { gte: dto.min_capacity } },
          { capacity: { lte: dto.max_capacity } },
          { price_per_night: { gte: dto.min_price_per_night } },
          { price_per_night: { lte: dto.max_price_per_night } },
          { is_active: true }, // Filter active rooms directly in DB
        ],
      },
    });

    //  Perform text and async availability filtering
    const availableRooms: rooms[] = [];

    for (const room of rooms) {
      // Name and Description Filter
      if (dto.name && room.name && !room.name.toLowerCase().includes(dto.name.toLowerCase())) continue;
      if (dto.description && room.description && !room.description.toLowerCase().includes(dto.description.toLowerCase())) continue;

      // Availability Check: Logic simplified for reliability
      // A conflict exists if (ExistingStart <= SearchEnd) AND (ExistingEnd >= SearchStart)
      const conflict = await this.prisma.bookings.findFirst({
        where: {
          room_id: room.id,
          status: { not: 'CANCELLED' }, // Don't block rooms for cancelled bookings
          AND: [
            { start_date: { lte: dto.end_date } },
            { end_date: { gte: dto.start_date } },
          ],
        },
      });

      if (!conflict) {
        availableRooms.push(room);
      }
    }

    return availableRooms;
  }
}