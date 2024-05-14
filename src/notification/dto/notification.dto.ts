import { IsIn, IsNotEmpty } from 'class-validator';

export class SendNotificationDto {
  @IsIn(['email', 'sms', 'whatsappSMS'])
  @IsNotEmpty({ message: 'medium value is required' })
  medium: string;

  @IsNotEmpty({ message: 'email id is required' })
  emailId: number;

  @IsNotEmpty({ message: 'site id is required' })
  siteId: number;

  @IsNotEmpty({ message: 'payload value is required' })
  payload: string;
}
