import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {GreatBasinComponent} from './great-basin.component';

describe('GreatBasinComponent', () => {
  let component: GreatBasinComponent;
  let fixture: ComponentFixture<GreatBasinComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GreatBasinComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreatBasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
