import { Injectable, Logger, NotFoundException } from '@nestjs/common'
import { CreateRoomDto } from './dto/create-room.dto'
// import { UpdateRoomDto } from './dto/update-room.dto'
// import 'dotenv/config'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class RoomsService {

  private readonly logger = new Logger('RoomsService')
  constructor(private readonly prisma: PrismaService) {}

  async create(createRoomDto: CreateRoomDto) {
    this.logger.log("Create")
    return await this.prisma.rooms.create({
      data: {...createRoomDto, is_active: createRoomDto.is_active || true }
    })
  }

  findAll() {
    this.logger.log("Find all")
    return this.prisma.rooms.findMany()
  }

  async findARoom(id: number) {
    this.logger.log("Find one")
    const room = await this.prisma.rooms.findUnique({where: {id}})
    if (room) return room
    else {
      this.logger.log("Find one: Invalid Room ID")
      throw new NotFoundException(`Room with id ${id} not found`)
    }
  }

  async disable(id: number) {
    this.logger.log("Disable")
    try {
      if (await this.findARoom(id))
      return this.prisma.rooms.update({where: {id}, data: {is_active: false}})
    } catch (e) { this.logger.error(e); throw e }
    
  }

  async enable(id: number) {
    this.logger.log("Enable")
    try {
      if (await this.findARoom(id))
      return this.prisma.rooms.update({where: {id}, data: {is_active: true}})
    } catch (e) { this.logger.error(e); throw e }
    
  }

  // update(id: number, updateRoomDto: UpdateRoomDto) {
  //   return `This action updates a #${id} room`
  // }

  async remove(id: number) {
    this.logger.log("Remove")
    try {
      if (await this.findARoom(id))
      return this.prisma.rooms.delete({where: {id}})
    } catch (e) { this.logger.error(e); throw e }
    
  }
}
