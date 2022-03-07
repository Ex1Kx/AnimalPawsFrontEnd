import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFoundationComponent } from './profile-foundation.component';

describe('ProfileFoundationComponent', () => {
  let component: ProfileFoundationComponent;
  let fixture: ComponentFixture<ProfileFoundationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileFoundationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFoundationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
