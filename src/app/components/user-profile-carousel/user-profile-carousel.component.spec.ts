import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileCarouselComponent } from './user-profile-carousel.component';

describe('UserProfileCarouselComponent', () => {
  let component: UserProfileCarouselComponent;
  let fixture: ComponentFixture<UserProfileCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
