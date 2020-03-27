import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GeojsonDownloadComponent} from './geojson-download.component';

describe('GeojsonDownloadComponent', () => {
  let component: GeojsonDownloadComponent;
  let fixture: ComponentFixture<GeojsonDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GeojsonDownloadComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeojsonDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
