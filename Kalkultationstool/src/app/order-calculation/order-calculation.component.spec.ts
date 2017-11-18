import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCalculationComponent } from './order-calculation.component';

describe('OrderCalculationComponent', () => {
  let component: OrderCalculationComponent;
  let fixture: ComponentFixture<OrderCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
