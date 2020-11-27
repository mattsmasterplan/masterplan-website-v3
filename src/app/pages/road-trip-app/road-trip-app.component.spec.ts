import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {RoadTripAppComponent} from './road-trip-app.component';

describe('RoadTripAppComponent', () => {
  let component: RoadTripAppComponent;
  let fixture: ComponentFixture<RoadTripAppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RoadTripAppComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadTripAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
