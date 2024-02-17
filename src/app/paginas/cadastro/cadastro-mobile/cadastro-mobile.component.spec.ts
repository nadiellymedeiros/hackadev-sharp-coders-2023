import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMobileComponent } from './cadastro-mobile.component';

describe('CadastroMobileComponent', () => {
  let component: CadastroMobileComponent;
  let fixture: ComponentFixture<CadastroMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
