import { DatabaseType } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { DBConfigModule } from '../database/config.module';
import { DBConfigService } from '../database/config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [DBConfigModule],
      useFactory: async (dbConfigService: DBConfigService) => ({
        type: 'postgres' as DatabaseType,
        host: dbConfigService.host,
        port: dbConfigService.port,
        username: dbConfigService.user,
        password: dbConfigService.password,
        database: dbConfigService.database,
        autoLoadEntities: true,
        synchronize: false,
        entities: ['dist/src/entities/*.entity.ts'],
        migrations: ['dist/src/migrations/*.ts'],
      }),
      inject: [DBConfigService],
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class DatabaseProviderModule {}
