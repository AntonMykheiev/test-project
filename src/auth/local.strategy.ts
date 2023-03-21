import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import {
  Injectable,
  UnauthorizedException,
  Dependencies,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
@Dependencies(AuthService)
export class LocalStrategy extends PassportStrategy(Strategy) {
  private authService: AuthService;
  constructor(authService: AuthService) {
    super();
    this.authService = authService;
  }

  async validate(email: string, password: string) {
    console.log('AAAA');
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      console.log('sdf');

      throw new UnauthorizedException();
    }
    return user;
  }
}
