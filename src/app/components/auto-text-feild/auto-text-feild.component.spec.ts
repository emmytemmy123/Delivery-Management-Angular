import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoTextFeildComponent } from './auto-text-feild.component';

describe('AutoTextFeildComponent', () => {
  let component: AutoTextFeildComponent;
  let fixture: ComponentFixture<AutoTextFeildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoTextFeildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoTextFeildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
