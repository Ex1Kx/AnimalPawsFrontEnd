import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundNewsComponent } from './fund-news.component';

describe('FundNewsComponent', () => {
  let component: FundNewsComponent;
  let fixture: ComponentFixture<FundNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
