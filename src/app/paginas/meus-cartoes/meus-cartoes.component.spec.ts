import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusCartoesComponent } from './meus-cartoes.component';

describe('MeusCartoesComponent', () => {
  let component: MeusCartoesComponent;
  let fixture: ComponentFixture<MeusCartoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeusCartoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeusCartoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
