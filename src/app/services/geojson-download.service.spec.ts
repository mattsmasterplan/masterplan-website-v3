import {TestBed} from '@angular/core/testing';

import {GeojsonDownloadService} from './geojson-download.service';

describe('GeojsonDownloadService', () => {
  let service: GeojsonDownloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeojsonDownloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
