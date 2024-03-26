import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtrlpersonalComponent } from './ctrlpersonal.component';

describe('CtrlpersonalComponent', () => {
  let component: CtrlpersonalComponent;
  let fixture: ComponentFixture<CtrlpersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtrlpersonalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CtrlpersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
