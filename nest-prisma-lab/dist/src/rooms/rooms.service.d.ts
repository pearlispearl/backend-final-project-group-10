import { CreateRoomDto } from './dto/create-room.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class RoomsService {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    create(createRoomDto: CreateRoomDto): Promise<{
        name: string;
        description: string | null;
        capacity: number;
        price_per_night: import("@prisma/client-runtime-utils").Decimal;
        image_url: string | null;
        is_active: boolean | null;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
    }>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        name: string;
        description: string | null;
        capacity: number;
        price_per_night: import("@prisma/client-runtime-utils").Decimal;
        image_url: string | null;
        is_active: boolean | null;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
    }[]>;
    findARoom(id: number): Promise<{
        name: string;
        description: string | null;
        capacity: number;
        price_per_night: import("@prisma/client-runtime-utils").Decimal;
        image_url: string | null;
        is_active: boolean | null;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
    }>;
    disable(id: number): Promise<{
        name: string;
        description: string | null;
        capacity: number;
        price_per_night: import("@prisma/client-runtime-utils").Decimal;
        image_url: string | null;
        is_active: boolean | null;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
    } | undefined>;
    enable(id: number): Promise<{
        name: string;
        description: string | null;
        capacity: number;
        price_per_night: import("@prisma/client-runtime-utils").Decimal;
        image_url: string | null;
        is_active: boolean | null;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
    } | undefined>;
    remove(id: number): Promise<{
        name: string;
        description: string | null;
        capacity: number;
        price_per_night: import("@prisma/client-runtime-utils").Decimal;
        image_url: string | null;
        is_active: boolean | null;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
    } | undefined>;
}
