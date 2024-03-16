import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoFormRegistroComponent } from './alumno-form-registro.component';

describe('AlumnoFormRegistroComponent', () => {
  let component: AlumnoFormRegistroComponent;
  let fixture: ComponentFixture<AlumnoFormRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnoFormRegistroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlumnoFormRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
