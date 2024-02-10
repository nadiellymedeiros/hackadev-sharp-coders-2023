import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderExtratoComponent } from './header-extrato.component';

describe('HeaderExtratoComponent', () => {
  let component: HeaderExtratoComponent;
  let fixture: ComponentFixture<HeaderExtratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderExtratoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderExtratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
