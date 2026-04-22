import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { NotAcceptableException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import * as b from 'bcrypt';

describe('AuthService', () => {
  let service: AuthService;
  let prisma: PrismaService;
  let jwt: JwtService;

  const mockPrisma = {
    users: {
      findFirst: jest.fn(),
      create: jest.fn(),
    },
  };

  const mockJwt = {
    sign: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: JwtService, useValue: mockJwt },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prisma = module.get<PrismaService>(PrismaService);
    jwt = module.get<JwtService>(JwtService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('register', () => {
    const registerDto = { username: 'testuser', password: 'password123', role: 'USER' };

    it('should successfully register a new user with a hashed password', async () => {
      mockPrisma.users.findFirst.mockResolvedValue(null); // No duplicate
      mockPrisma.users.create.mockResolvedValue({ id: 1, ...registerDto });

      const result = await service.register(registerDto);

      expect(result).toBeDefined();
      expect(mockPrisma.users.create).toHaveBeenCalled();
      // Verify that the password sent to prisma is NOT the plain text one
      const createArgs = mockPrisma.users.create.mock.calls[0][0];
      expect(createArgs.data.password).not.toBe(registerDto.password);
    });

    it('should throw NotAcceptableException for duplicate usernames', async () => {
      mockPrisma.users.findFirst.mockResolvedValue({ id: 1, name: 'testuser' });

      await expect(service.register(registerDto)).rejects.toThrow(NotAcceptableException);
    });
  });

  describe('login', () => {
    const loginDto = { username: 'testuser', password: 'password123' };

    it('should return an access_token for valid credentials', async () => {
      const hashedPassword = await b.hash('password123', 12);
      mockPrisma.users.findFirst.mockResolvedValue({ 
        id: 1, 
        name: 'testuser', 
        password: hashedPassword 
      });
      mockJwt.sign.mockReturnValue('mock-jwt-token');

      const result = await service.login(loginDto);

      expect(result).toEqual({ access_token: 'mock-jwt-token' });
      expect(mockJwt.sign).toHaveBeenCalledWith({ sub: 1, username: 'testuser' });
    });

    it('should throw NotFoundException if user does not exist', async () => {
      mockPrisma.users.findFirst.mockResolvedValue(null);

      await expect(service.login(loginDto)).rejects.toThrow(NotFoundException);
    });

    it('should throw UnauthorizedException for incorrect password', async () => {
      const hashedPassword = await b.hash('different-password', 12);
      mockPrisma.users.findFirst.mockResolvedValue({ 
        id: 1, 
        name: 'testuser', 
        password: hashedPassword 
      });

      await expect(service.login(loginDto)).rejects.toThrow(UnauthorizedException);
    });
  });
});