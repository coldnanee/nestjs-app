import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseService } from './database.service';
import { databaseConfig } from '@/configs';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: databaseConfig,
    }),
  ],
  exports: [DatabaseService],
  providers: [DatabaseService],
})
export class DatabaseModule {}
