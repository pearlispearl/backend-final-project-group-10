import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly prisma;
    private readonly jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    register(dto: RegisterDto): Promise<{
        name: string | null;
        id: number;
        password: string;
        role: string | null;
    }>;
    login(dto: LoginDto): Promise<string>;
    hash(password: string): Promise<string>;
}
