import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundProfileComponent } from './fund-profile.component';

describe('FundProfileComponent', () => {
  let component: FundProfileComponent;
  let fixture: ComponentFixture<FundProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
