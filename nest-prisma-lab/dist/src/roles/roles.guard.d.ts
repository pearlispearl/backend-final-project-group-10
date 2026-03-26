import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class RolesGuard implements CanActivate {
    private reflector;
    private readonly prisma;
    private readonly jwt;
    private readonly logger;
    constructor(reflector: Reflector, prisma: PrismaService, jwt: JwtService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
