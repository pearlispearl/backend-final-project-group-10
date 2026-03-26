import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
export declare class RoomsController {
    private readonly roomsService;
    constructor(roomsService: RoomsService);
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
    findAll(): Promise<{
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
    findOne(id: number): Promise<{
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
    update(id: number): Promise<{
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
