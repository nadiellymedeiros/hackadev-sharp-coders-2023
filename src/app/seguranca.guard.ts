import { CanActivateFn } from '@angular/router';

export const segurancaGuard: CanActivateFn = (route, state) => {
  return true;
};
