import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessDataLoadComponent } from './access-data-load.component';

describe('AccessDataLoadComponent', () => {
  let component: AccessDataLoadComponent;
  let fixture: ComponentFixture<AccessDataLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessDataLoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessDataLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
