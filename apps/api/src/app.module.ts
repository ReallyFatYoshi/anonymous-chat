import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';

import { AppController } from './app.controller';

import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { CsrfModule } from './csrf/csrf.module';

@Module({
  imports: [AuthModule, ChatModule, CsrfModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
