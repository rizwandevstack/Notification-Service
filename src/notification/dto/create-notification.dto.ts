import { IsString } from "class-validator";

export interface SendNotificationDto {
    // @IsString({message: 'medium type is required'})
    medium: string;

    data: string
  }