import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateRoomDto {
  // id: number;              // Room ID
  @IsString()
  @IsNotEmpty()
  name: string;            // Room name or number
  @IsString()
  @IsOptional()
  description: string;     // Room description
  @IsNumber()
  @IsNotEmpty()
  capacity: number;        // Maximum guests
  @IsNumber()
  @IsNotEmpty()
  price_per_night: number; // Price per night
  @IsString()
  @IsOptional()
  image_url: string;       // Image URL or path
  @IsBoolean()
  @IsOptional()
  is_active?: boolean;     // Availability status
}
