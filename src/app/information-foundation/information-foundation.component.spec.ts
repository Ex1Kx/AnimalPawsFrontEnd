import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationFoundationComponent } from './information-foundation.component';

describe('InformationFoundationComponent', () => {
  let component: InformationFoundationComponent;
  let fixture: ComponentFixture<InformationFoundationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationFoundationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationFoundationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
