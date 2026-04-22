import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SearchQueryDto } from './dto/search-query.dto'; 

@Injectable()
export class SearchService {
  constructor(private readonly prisma: PrismaService) {}

  async search(dto: SearchQueryDto) {
    const rooms = await this.prisma.rooms.findMany(
      {
        where: {
          AND: [
            { capacity: {gte: dto.min_capacity} },
            { capacity: {lte: dto.max_capacity} },
            { price_per_night: {gte: dto.max_price_per_night} },
            { price_per_night: {lte: dto.min_price_per_night} },
          ]
        }
      }
    )
    return rooms.filter(
      room => {
        if (room.name && dto.name &&
          !room.name.includes(dto.name)) return false
        if (room.description && dto.description &&
          !room.description.includes(dto.description)) return false

        return room.is_active
      }
    )
  }
}
