import {Injectable} from '@angular/core';
import {HttpResponse, HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeojsonDownloadService {
  constructor(private http: HttpClient) {}

  downloadFile(parkCode): Observable<any> {
    let getUrl =
      '../../../assets/documents/road-trip-app/National Parks Geojson/' +
      parkCode +
      '.geojson';
    return this.http.get(getUrl, {responseType: 'blob'});
  }
}
