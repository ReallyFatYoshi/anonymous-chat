import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    if (!bcrypt.compareSync(password, user.password)) {
      throw new Error('Invalid password');
    }

    return {
      access_token: this.jwtService.sign({
        id: user.id,
        email: user.email,
      }),
      refresh_token: this.jwtService.sign(
        {
          id: user.id,
          email: user.email,
        },
        {
          expiresIn: '7d',
        },
      ),
    };
  }
}
