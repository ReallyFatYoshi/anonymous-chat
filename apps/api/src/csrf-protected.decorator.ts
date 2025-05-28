import { applyDecorators, UseGuards } from '@nestjs/common';
import { CsrfGuard } from './csrf.guard';

export function CsrfProtected() {
  return applyDecorators(UseGuards(CsrfGuard));
}
