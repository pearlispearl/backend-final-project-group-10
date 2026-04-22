import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { NotAcceptableException, NotFoundException, UnauthorizedException } from '@nestjs/common';

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;

  // Mock the AuthService to isolate the controller
  const mockAuthService = {
    register: jest.fn(),
    login: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService,
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('register', () => {
    it('should call service.register and return the new user', async () => {
      const dto: RegisterDto = { username: 'pearl', password: 'password123', role: 'USER' };
      const result = { id: 1, name: 'pearl', role: 'USER' };

      mockAuthService.register.mockResolvedValue(result);

      expect(await controller.register(dto)).toBe(result);
      expect(service.register).toHaveBeenCalledWith(dto);
    });

    it('should throw NotAcceptableException if username is taken', async () => {
      const dto: RegisterDto = { username: 'duplicate', password: '123', role: 'USER' };
      mockAuthService.register.mockRejectedValue(new NotAcceptableException('Duplicate username'));

      await expect(controller.register(dto)).rejects.toThrow(NotAcceptableException);
    });
  });

  describe('login', () => {
    it('should call service.login and return an access token', async () => {
      const dto: LoginDto = { username: 'pearl', password: 'password123' };
      const result = { access_token: 'valid-jwt-token' };

      mockAuthService.login.mockResolvedValue(result);

      expect(await controller.login(dto)).toBe(result);
      expect(service.login).toHaveBeenCalledWith(dto);
    });

    it('should throw UnauthorizedException for wrong password', async () => {
      const dto: LoginDto = { username: 'pearl', password: 'wrong' };
      mockAuthService.login.mockRejectedValue(new UnauthorizedException('Incorrect Password'));

      await expect(controller.login(dto)).rejects.toThrow(UnauthorizedException);
    });

    it('should throw NotFoundException if user does not exist', async () => {
      const dto: LoginDto = { username: 'ghost', password: '123' };
      mockAuthService.login.mockRejectedValue(new NotFoundException('User Not Found'));

      await expect(controller.login(dto)).rejects.toThrow(NotFoundException);
    });
  });
});