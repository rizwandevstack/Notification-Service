import { Injectable } from '@nestjs/common';
import { SendNotificationDto } from './dto/create-notification.dto';

@Injectable()
export class NotificationService {
  async sendNotification(sendNotification: SendNotificationDto) {
    switch (sendNotification.medium.toLowerCase()) {
      case 'email':
        await this.sendEmail(sendNotification.data);
        break;
      case 'sms':
        await this.sendSMS(sendNotification.data);
        break;
      case 'whatsapp':
        await this.sendWhatsapp(sendNotification.data);
        break;
      default:
        throw new Error(`Unsupported notification channel: ${sendNotification.medium}`);
    }
  }
  private async sendEmail(data: string) {
    console.log({ data });
  }
  private async sendSMS(data: string) {
    console.log({ data });
  }
  private async sendWhatsapp(data: string) {
    console.log({ data });
  }
}
