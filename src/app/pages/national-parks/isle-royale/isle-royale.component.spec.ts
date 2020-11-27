import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {IsleRoyaleComponent} from './isle-royale.component';

describe('IsleRoyaleComponent', () => {
  let component: IsleRoyaleComponent;
  let fixture: ComponentFixture<IsleRoyaleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IsleRoyaleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsleRoyaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
