import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { envConfig } from './configs';
import { DatabaseModule } from './core/database/database.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(envConfig), DatabaseModule, UserModule, AuthModule],
  exports: [],
  providers: [],
  controllers: [],
})
export class AppModule {}
