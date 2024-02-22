import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { segurancaGuard } from './seguranca.guard';

describe('segurancaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => segurancaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
