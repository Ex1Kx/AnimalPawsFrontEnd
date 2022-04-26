import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuitorsComponent } from './contribuitors.component';

describe('ContribuitorsComponent', () => {
  let component: ContribuitorsComponent;
  let fixture: ComponentFixture<ContribuitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContribuitorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribuitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
