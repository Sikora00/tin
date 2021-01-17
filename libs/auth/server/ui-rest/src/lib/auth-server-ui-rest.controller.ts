import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthServerApplicationService } from '../../../application/src';
import { RegisterDto } from './dtos/register.dto';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthServerUiRestController {
  constructor(private authService: AuthServerApplicationService) {}

  @Post('login')
  async login(@Body() req: LoginDto) {
    return this.authService.login(req);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('register')
  async register(@Body() data: RegisterDto): Promise<void> {
    await this.authService.register(data);
  }
}
