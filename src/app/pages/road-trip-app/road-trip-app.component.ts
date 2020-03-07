import { Component, OnInit, ViewChild } from "@angular/core";
import { MapInfoWindow, MapMarker, GoogleMap } from "@angular/google-maps";

//import * as data from '../../../assets/documents/road-trip-app/National Parks Geojson/acad.geojson';

@Component({
  selector: "app-road-trip-app",
  templateUrl: "./road-trip-app.component.html",
  styleUrls: ["./road-trip-app.component.css"]
})
export class RoadTripAppComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;

  height = "100vh";
  zoom = 4;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    mapTypeId: "terrain",
    styles: [
      {
        featureType: "administrative",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "administrative.land_parcel",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "administrative.neighborhood",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "administrative.province",
        elementType: "labels",
        stylers: [{ visibility: "on" }]
      },
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "road",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "water",
        elementType: "labels.text",
        stylers: [{ visibility: "off" }]
      }
    ]
  };
  markers = [];
  infoContent = "";

  constructor() {}

  ngOnInit() {
    // navigator.geolocation.getCurrentPosition(position => {
    this.center = {
      lat: 39,
      lng: -95
    };
    // });
  }

  //   If we want to make sure that the references injected by @ViewChild are present, we should always write our initialization code using ngAfterViewInit().
  // Depending on the situation, the template references might already be present on ngOnInit(), but we shouldn't count on it.
  ngAfterViewInit() {
    this.loadgeojson();
  }

  loadgeojson() {
    var geojson =
      "../../../assets/documents/road-trip-app/National Parks Geojson/acad.geojson";

    // console.log(this.map);

    this.map.data.loadGeoJson(geojson);
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--;
  }

  click(event: google.maps.MouseEvent) {
    console.log(event);
  }

  logCenter() {
    console.log(JSON.stringify(this.map.getCenter()));
  }

  addMarker() {
    this.markers.push({
      position: {
        lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
        lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10
      },
      label: {
        color: "red",
        text: "Marker label " + (this.markers.length + 1)
      },
      title: "Marker title " + (this.markers.length + 1),
      info: "Marker info " + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.BOUNCE
      }
    });
  }

  openInfo(marker: MapMarker, content) {
    this.infoContent = content;
    this.info.open(marker);
  }
}
