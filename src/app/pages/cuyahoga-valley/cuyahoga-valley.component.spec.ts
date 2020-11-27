import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {CuyahogaValleyComponent} from './cuyahoga-valley.component';

describe('CuyahogaValleyComponent', () => {
  let component: CuyahogaValleyComponent;
  let fixture: ComponentFixture<CuyahogaValleyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CuyahogaValleyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuyahogaValleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
