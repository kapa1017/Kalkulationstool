import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionOrders2Component } from './production-orders-2.component';

describe('ProductionOrders2Component', () => {
  let component: ProductionOrders2Component;
  let fixture: ComponentFixture<ProductionOrders2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionOrders2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionOrders2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
