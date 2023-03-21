import {
  Controller,
  Get,
  Post,
  Request,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Bind,
} from '@nestjs/common';
import { loginUserDto } from './dto/login-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  @Bind(Request())
  async login(req: { user: any }) {
    return req.user;
  }
}
