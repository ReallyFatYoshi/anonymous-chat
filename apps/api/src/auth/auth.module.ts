import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AppController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [JwtModule],
  controllers: [AppController],
  providers: [AuthService, PrismaService],
})
export class AuthModule {}
