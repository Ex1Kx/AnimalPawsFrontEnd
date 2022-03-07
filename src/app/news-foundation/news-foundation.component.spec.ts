import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFoundationComponent } from './news-foundation.component';

describe('NewsFoundationComponent', () => {
  let component: NewsFoundationComponent;
  let fixture: ComponentFixture<NewsFoundationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsFoundationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFoundationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
