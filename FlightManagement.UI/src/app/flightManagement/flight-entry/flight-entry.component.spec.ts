import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightEntryComponent } from './flight-entry.component';

describe('FlightEntryComponent', () => {
  let component: FlightEntryComponent;
  let fixture: ComponentFixture<FlightEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
