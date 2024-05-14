import { Injectable } from '@nestjs/common';
import { SendNotificationDto } from './dto/notification.dto';
import { NotificationMediumTypes } from './constants';

@Injectable()
export class NotificationService {
  async sendNotification(sendNotification: SendNotificationDto) {
    switch (sendNotification.medium?.toLowerCase()) {
      case NotificationMediumTypes.EMAIL:
        await this.sendEmail(sendNotification?.payload);
        break;
      case NotificationMediumTypes.SMS:
        await this.sendSMS(sendNotification?.payload);
        break;
      case NotificationMediumTypes.WHATSAPP:
        await this.sendWhatsappSMS(sendNotification?.payload);
        break;
      default:
        throw new Error(
          `Unsupported notification channel: ${sendNotification?.medium}`,
        );
    }
  }
  private async sendEmail(payload: string) {
    console.log({ payload });
  }
  private async sendSMS(payload: string) {
    console.log({ payload });
  }
  private async sendWhatsappSMS(payload: string) {
    console.log({ payload });
  }
}
