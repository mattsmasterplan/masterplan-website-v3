import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {DancaseBuildComponent} from './dancase-build.component';

describe('DancaseBuildComponent', () => {
  let component: DancaseBuildComponent;
  let fixture: ComponentFixture<DancaseBuildComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DancaseBuildComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DancaseBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
