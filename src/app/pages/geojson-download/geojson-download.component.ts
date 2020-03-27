import { GeojsonDownloadService } from './../../services/geojson-download.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
// Import NPS Park Data from json file as an object
import { data as parkData } from '../../../assets/documents/road-trip-app/NPS-park-data.json';

@Component({
  selector: 'app-geojson-download',
  templateUrl: './geojson-download.component.html',
  styleUrls: ['./geojson-download.component.css']
})
export class GeojsonDownloadComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;

  // TODO this is a workaround for making the imported parkData object available inside the component
  //@Input() parkData: any;
  parkData = parkData;

  // TODO: height is being forced and is not dyanmic to the actual viewport minus toolbars
  height = '50vh';
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
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'administrative.land_parcel',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'administrative.neighborhood',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'administrative.province',
        elementType: 'labels',
        stylers: [{ visibility: 'on' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'road',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text',
        stylers: [{ visibility: 'off' }]
      }
    ]
  };

  constructor(private GeojsonDownloadService: GeojsonDownloadService) { }

  ngOnInit(): void { }

  previewGeojson(parkCode) {
    // Create data layer
    let data_layer = new google.maps.Data({ map: this.map._googleMap });
    // set URL for requested geojson file
    let geojson =
      '../../../assets/documents/road-trip-app/National Parks Geojson/' +
      parkCode +
      '.geojson';
    // Load geojson layer to map
    data_layer.loadGeoJson(geojson);
    //this.map._googleMap.data.addGeoJson(JSON.parse(geojson));
    console.log(this.map._googleMap.data);

    let bounds = new google.maps.LatLngBounds();

    // bounds.extend(geojson)

    this.map._googleMap.data.forEach(function (feature) {
      // this.processPoints(feature.getGeometry(), bounds.extend, bounds);
      console.log(feature);
    })
    // this.map.fitBounds(bounds);
  }

  /**
      * Process each point in a Geometry, regardless of how deep the points may lie.
      * @param {google.maps.Data.Geometry} geometry The structure to process
      * @param {function(google.maps.LatLng)} callback A function to call on each
      *     LatLng point encountered (e.g. Array.push)
      * @param {Object} thisArg The value of 'this' as provided to 'callback' (e.g.
      *     myArray)
      */
  processPoints(geometry, callback, thisArg) {
    if (geometry instanceof google.maps.LatLng) {
      callback.call(thisArg, geometry);
    } else if (geometry instanceof google.maps.Data.Point) {
      callback.call(thisArg, geometry.get());
    } else {
      geometry.getArray().forEach(function (g) {
        this.processPoints(g, callback, thisArg);
      });
    }
  }


  supplyDownload(parkCode) {
    // Use GeojsonDownloadService to get requested file
    this.GeojsonDownloadService.downloadFile(parkCode).subscribe(response => {
      let blob: any = new Blob([response], { type: 'text/json; charset=utf-8' });
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
