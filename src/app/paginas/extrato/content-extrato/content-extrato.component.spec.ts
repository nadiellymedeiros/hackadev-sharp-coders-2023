import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentExtratoComponent } from './content-extrato.component';

describe('ContentExtratoComponent', () => {
  let component: ContentExtratoComponent;
  let fixture: ComponentFixture<ContentExtratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentExtratoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentExtratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
