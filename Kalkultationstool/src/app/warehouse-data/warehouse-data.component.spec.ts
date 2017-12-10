import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseDataComponent } from './warehouse-data.component';

describe('WarehouseDataComponent', () => {
  let component: WarehouseDataComponent;
  let fixture: ComponentFixture<WarehouseDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
