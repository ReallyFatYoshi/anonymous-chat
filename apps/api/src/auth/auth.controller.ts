import { Controller, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Controller('auth')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  async login() {
    return await this.authService.login('', '');
  }
}
