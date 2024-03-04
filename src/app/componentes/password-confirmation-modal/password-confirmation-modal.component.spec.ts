import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordConfirmationModalComponent } from './password-confirmation-modal.component';

describe('PasswordConfirmationModalComponent', () => {
  let component: PasswordConfirmationModalComponent;
  let fixture: ComponentFixture<PasswordConfirmationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordConfirmationModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
