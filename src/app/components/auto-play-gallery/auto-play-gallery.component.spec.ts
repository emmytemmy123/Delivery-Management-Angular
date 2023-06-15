import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoPlayGalleryComponent } from './auto-play-gallery.component';

describe('AutoPlayGalleryComponent', () => {
  let component: AutoPlayGalleryComponent;
  let fixture: ComponentFixture<AutoPlayGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoPlayGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoPlayGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
