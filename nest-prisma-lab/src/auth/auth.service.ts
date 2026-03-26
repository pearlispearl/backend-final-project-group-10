import { Injectable, NotAcceptableException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as b from 'bcrypt'
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService, private readonly jwt: JwtService) {}

  async register(dto: RegisterDto) {
    if (await this.prisma.users.findFirst({where: {name: dto.username}}) !== null)
    throw new NotAcceptableException(`Duplicate username`)
    const hashed_password = await this.hash(dto.password)
    return await this.prisma.users.create({data: {name: dto.username, password: hashed_password, role: dto.role}})
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.users.findFirst({where: {name: dto.username}})
    if (!user) throw new NotFoundException(`User Not Found`)
    const payload = {sub: user.id, username: user.name}
    if (await b.compare(dto.password, user.password || "")) return this.jwt.sign(payload)
    else throw new UnauthorizedException(`Incorrect Password`)
  }

  hash(password: string) {
    const saltRounds = 12
    const hashed_password = b.hash(password, saltRounds)
    return hashed_password
  }
}
