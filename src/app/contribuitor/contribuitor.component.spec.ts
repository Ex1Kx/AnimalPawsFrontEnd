import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuitorComponent } from './contribuitor.component';

describe('ContribuitorComponent', () => {
  let component: ContribuitorComponent;
  let fixture: ComponentFixture<ContribuitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContribuitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribuitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
