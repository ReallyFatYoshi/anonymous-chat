import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { CsrfController } from './csrf.controller';

@Module({
  imports: [JwtModule],
  controllers: [CsrfController],
  providers: [],
})
export class CsrfModule {}
