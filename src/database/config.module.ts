import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configuration';
import { DBConfigService } from './config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        DB_NAME: Joi.string(),
        DB_HOST: Joi.string(),
        DB_PORT: Joi.number().default(5432),
        DB_USER: Joi.string(),
        DB_PASSWORD: Joi.string(),
      }),
    }),
  ],
  providers: [ConfigService, DBConfigService],
  exports: [ConfigService, DBConfigService],
})
export class DBConfigModule {}
