import { BannedUserEntity, UserEntity } from '@/modules/user/entity';
import { ConfigService } from '@nestjs/config';
import type { SequelizeModuleOptions } from '@nestjs/sequelize';

export const databaseConfig = (
  config: ConfigService,
): SequelizeModuleOptions => {
  return {
    dialect: 'postgres',
    host: config.get('POSTGRES_HOST'),
    password: config.get('POSTGRES_PASSWORD'),
    port: +config.get('POSTGRES_PORT'),
    username: config.get('POSTGRES_USER'),
    database: config.get('POSTGRES_DATABASE'),
    autoLoadModels: true,
    models: [UserEntity, BannedUserEntity],
  };
};
