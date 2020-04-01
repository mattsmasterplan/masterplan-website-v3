import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IsleRoyaleComponent} from './isle-royale.component';

describe('IsleRoyaleComponent', () => {
  let component: IsleRoyaleComponent;
  let fixture: ComponentFixture<IsleRoyaleComponent>;

  beforeEach(async(() => {
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
