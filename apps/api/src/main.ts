import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';
import * as cookieParser from 'cookie-parser';
import * as csurf from 'csurf';

import env from '@manonymous-chat/config-env';

import { NextFunction, Request, Response } from 'express';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    origin: env.APP_ORIGINS,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.use(cookieParser(env.APP_KEY));
  app.use(
    csurf({
      cookie: true,
    }),
  );
  app.setGlobalPrefix('api');
  app.enableShutdownHooks();

  if (env.APP_ENV !== 'production') {
    const config = new DocumentBuilder()
      .setTitle('Anonymous Chat API')
      .setDescription('Anonymous Chat API description')
      .setVersion('1.0')
      .addTag('Chat', 'Chat management')
      .addTag('User', 'User management')
      .addTag('Message', 'Message management')
      .addTag('Group', 'Group management')
      .addTag('Notification', 'Notification management')
      .addTag('Auth', 'Authentication and authorization')
      .addTag('Media', 'Media management')
      .setLicense('MIT', 'https://opensource.org/licenses/MIT')
      .setTermsOfService('https://example.com/terms')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    app.use(
      '/docs',
      apiReference({
        spec: {
          content: document,
        },
      }),
    );
  }

  interface CsrfError extends Error {
    code?: string;
  }

  app.use((err: CsrfError, req: Request, res: Response, next: NextFunction) => {
    if (err.code !== 'EBADCSRFTOKEN') return next(err);
    res.status(403).json({ message: 'Invalid CSRF token' });
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
