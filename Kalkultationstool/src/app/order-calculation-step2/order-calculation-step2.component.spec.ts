import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCalculationStep2Component } from './order-calculation-step2.component';

describe('OrderCalculationStep2Component', () => {
  let component: OrderCalculationStep2Component;
  let fixture: ComponentFixture<OrderCalculationStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCalculationStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCalculationStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
