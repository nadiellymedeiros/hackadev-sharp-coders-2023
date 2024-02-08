import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { testandoGuard } from './testando.guard';

describe('testandoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => testandoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
