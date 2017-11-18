import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionOrders3Component } from './production-orders-3.component';

describe('ProductionOrders3Component', () => {
  let component: ProductionOrders3Component;
  let fixture: ComponentFixture<ProductionOrders3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionOrders3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionOrders3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
