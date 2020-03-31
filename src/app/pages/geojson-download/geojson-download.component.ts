import {GeojsonDownloadService} from './../../services/geojson-download.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MapInfoWindow, MapMarker, GoogleMap} from '@angular/google-maps';
// Import NPS Park Data from json file as an object
import {data as parkData} from '../../../assets/documents/road-trip-app/NPS-park-data.json';

@Component({
  selector: 'app-geojson-download',
  templateUrl: './geojson-download.component.html',
  styleUrls: ['./geojson-download.component.css']
})
export class GeojsonDownloadComponent implements OnInit {

  constructor(private GeojsonDownloadService: GeojsonDownloadService) {}

  ngOnInit(): void {}

  @ViewChild(GoogleMap, {static: false}) map: GoogleMap;


  selectedParkName: String;

  // TODO this is a workaround for making the imported parkData object available inside the component
  // The mat-list generates from this array
  parkData = parkData;

  // TODO: height is being forced and is not dyanmic to the actual viewport minus toolbars
 // height = '50vh';
  zoom = 4;
  center = {
    lat: 39,
    lng: -95
  };
  options: google.maps.MapOptions = {
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
    mapTypeId: 'terrain',
    styles: [
      {
        featureType: 'administrative',
        elementType: 'labels',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'administrative.land_parcel',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'administrative.neighborhood',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'administrative.province',
        elementType: 'labels',
        stylers: [{visibility: 'on'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'road',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text',
        stylers: [{visibility: 'off'}]
      }
    ]
  };

  previewGeojson(park) {
    // Remove any features already loaded to the map
    this.map.data.forEach(feature => {
      this.map.data.remove(feature);
    });

    // set URL for requested geojson file
    let geojson =
      '../../../assets/documents/road-trip-app/National Parks Geojson/' +
      park.parkCode +
      '.geojson';

    let bounds = new google.maps.LatLngBounds();

    // Load geojson to map. Callback function sets the view to the bounds of the geojson
    this.map.data.loadGeoJson(geojson, null, features => {
      // Should only be one feature since I am loading individual files
      features.forEach(feature => {
        // Take each latlng in the feature and extend the bounds to contain it
        feature.getGeometry().forEachLatLng(latlng => {
          bounds.extend(latlng);
        });
      });
      // Set preview title
      this.selectedParkName = park.fullName;
      // Set the map bounds inside the callback function to ensure the geojson is loaded already
      this.map.fitBounds(bounds);
    });
  }

  supplyDownload(parkCode) {
    // Use GeojsonDownloadService to get requested file
    this.GeojsonDownloadService.downloadFile(parkCode).subscribe(response => {
      let blob: any = new Blob([response], {type: 'text/json; charset=utf-8'});
      const url = window.URL.createObjectURL(blob);
      // TODO Probably not the ideal way to serve up a file but it's working for now
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
