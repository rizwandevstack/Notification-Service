import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationModule } from './notification/notification.module';
import { DBConfigModule } from './database/config.module';
import { DatabaseProviderModule } from './providers/postgres.provider.module';

@Module({
  imports: [NotificationModule, DBConfigModule, DatabaseProviderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
