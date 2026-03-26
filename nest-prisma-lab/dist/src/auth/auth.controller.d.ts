import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly auth;
    constructor(auth: AuthService);
    register(dto: RegisterDto): Promise<{
        name: string | null;
        id: number;
        password: string;
        role: string | null;
    }>;
    login(dto: LoginDto): Promise<string>;
}
