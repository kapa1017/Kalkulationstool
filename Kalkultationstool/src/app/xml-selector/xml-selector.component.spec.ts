import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlSelectorComponent } from './xml-selector.component';

describe('XmlSelectorComponent', () => {
  let component: XmlSelectorComponent;
  let fixture: ComponentFixture<XmlSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmlSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmlSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
