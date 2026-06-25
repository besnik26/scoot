import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAccordionsComponent } from './about-accordions.component';

describe('AboutAccordionsComponent', () => {
  let component: AboutAccordionsComponent;
  let fixture: ComponentFixture<AboutAccordionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutAccordionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutAccordionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
