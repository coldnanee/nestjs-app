import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserEntity, BannedUserEntity } from './entity';

@Module({
  imports: [SequelizeModule.forFeature([UserEntity, BannedUserEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
