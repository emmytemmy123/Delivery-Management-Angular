import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverDispatchComponent } from './driver-dispatch.component';

describe('DriverDispatchComponent', () => {
  let component: DriverDispatchComponent;
  let fixture: ComponentFixture<DriverDispatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverDispatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
