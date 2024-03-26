import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLandingComponent } from './homelanding.component';

describe('HomeLandingComponent', () => {
  let component: HomeLandingComponent;
  let fixture: ComponentFixture<HomeLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
