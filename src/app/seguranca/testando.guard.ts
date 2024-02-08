import { CanActivateFn } from '@angular/router';

export const testandoGuard: CanActivateFn = (route, state) => {
  return true;
};
