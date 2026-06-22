import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryHeroComponent } from './secondary-hero.component';

describe('SecondaryHeroComponent', () => {
  let component: SecondaryHeroComponent;
  let fixture: ComponentFixture<SecondaryHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondaryHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
