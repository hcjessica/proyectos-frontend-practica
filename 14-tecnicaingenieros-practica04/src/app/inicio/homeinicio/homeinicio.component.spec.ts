import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInicioComponent } from './homeinicio.component';

describe('HomeInicioComponent', () => {
  let component: HomeInicioComponent;
  let fixture: ComponentFixture<HomeInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeInicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
