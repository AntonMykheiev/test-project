import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
@Injectable()
export class AuthService {
  private usersService: UsersService;
  constructor(usersService: UsersService) {
    this.usersService = usersService;
  }
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    console.log('user from auth: ', user);
    if (user && user.password === password) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }
}
