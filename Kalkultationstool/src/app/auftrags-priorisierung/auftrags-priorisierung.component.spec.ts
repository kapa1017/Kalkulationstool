import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuftragsPriorisierungComponent } from './auftrags-priorisierung.component';

describe('AuftragsPriorisierungComponent', () => {
  let component: AuftragsPriorisierungComponent;
  let fixture: ComponentFixture<AuftragsPriorisierungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuftragsPriorisierungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuftragsPriorisierungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
