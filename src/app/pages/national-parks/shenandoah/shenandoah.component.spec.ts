import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {ShenandoahComponent} from './shenandoah.component';

describe('ShenandoahComponent', () => {
  let component: ShenandoahComponent;
  let fixture: ComponentFixture<ShenandoahComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ShenandoahComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShenandoahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
