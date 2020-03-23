import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SourcesOfTheRiverComponent} from './sources-of-the-river.component';

describe('SourcesOfTheRiverComponent', () => {
  let component: SourcesOfTheRiverComponent;
  let fixture: ComponentFixture<SourcesOfTheRiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SourcesOfTheRiverComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcesOfTheRiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
