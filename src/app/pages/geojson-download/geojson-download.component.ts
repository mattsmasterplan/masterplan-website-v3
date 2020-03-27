import {GeojsonDownloadService} from './../../services/geojson-download.service';
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// Import NPS Park Data from json file as an object
import {data as parkData} from '../../../assets/documents/road-trip-app/NPS-park-data.json';

@Component({
  selector: 'app-geojson-download',
  templateUrl: './geojson-download.component.html',
  styleUrls: ['./geojson-download.component.css']
})
export class GeojsonDownloadComponent implements OnInit {
  // TODO this is a workaround for making the imported parkData object available inside the component
  //@Input() parkData: any;
  parkData = parkData;

  constructor(private GeojsonDownloadService: GeojsonDownloadService) {}

  ngOnInit(): void {}

  supplyDownload(parkCode) {
    // Use GeojsonDownloadService to get requested file
    this.GeojsonDownloadService.downloadFile(parkCode).subscribe(response => {
      let blob: any = new Blob([response], {type: 'text/json; charset=utf-8'});
      const url = window.URL.createObjectURL(blob);
      // TODO Probably not the ideal way to serve up a download but it's working for now
      let a = document.createElement('a');
      document.body.appendChild(a);
      a.setAttribute('style', 'display: none');
      a.href = url;
      a.download = parkCode + '.geojson';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    }),
      error => console.log('Error downloading the file');
  }
}
