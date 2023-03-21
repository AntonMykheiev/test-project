import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';

@Module({
  providers: [AuthService, LocalStrategy],
  imports: [UsersModule],
  controllers: [AuthController],
})
export class AuthModule {}
