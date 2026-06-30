import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersContentComponent } from './careers-content.component';

describe('CareersContentComponent', () => {
  let component: CareersContentComponent;
  let fixture: ComponentFixture<CareersContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareersContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareersContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
