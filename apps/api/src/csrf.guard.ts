import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class CsrfGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<Request>();

    // Read token from header
    const incomingToken: string | undefined =
      (req.headers['x-csrf-token'] as string | undefined) ||
      (req.headers['csrf-token'] as string | undefined) ||
      (req.body as { _csrf?: string })._csrf;

    try {
      const validToken = req.csrfToken();
      if (incomingToken !== validToken) {
        throw new ForbiddenException('CSRF token mismatch');
      }
      return true;
    } catch {
      throw new ForbiddenException('Missing or invalid CSRF token');
    }
  }
}
