import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCalculationComponent } from './work-calculation.component';

describe('WorkCalculationComponent', () => {
  let component: WorkCalculationComponent;
  let fixture: ComponentFixture<WorkCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
