import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('csrf-token')
export class CsrfController {
  @Get('/')
  getCsrfToken(@Req() request: Request) {
    return {
      csrfToken: request.csrfToken(),
    };
  }
}
