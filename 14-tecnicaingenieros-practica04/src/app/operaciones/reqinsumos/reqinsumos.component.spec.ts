import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqinsumosComponent } from './reqinsumos.component';

describe('ReqinsumosComponent', () => {
  let component: ReqinsumosComponent;
  let fixture: ComponentFixture<ReqinsumosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReqinsumosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReqinsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
