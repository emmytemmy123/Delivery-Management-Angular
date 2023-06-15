import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInTokenComponent } from './sign-in-token.component';

describe('SignInTokenComponent', () => {
  let component: SignInTokenComponent;
  let fixture: ComponentFixture<SignInTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInTokenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
