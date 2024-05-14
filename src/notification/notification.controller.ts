import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { NotificationService } from './notification.service';
import { SendNotificationDto } from './dto/notification.dto';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @MessagePattern('send_notification')
  create(@Payload() sendNotification: SendNotificationDto) {
    return this.notificationService.sendNotification(sendNotification);
  }
}
