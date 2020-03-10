import { Component, OnInit, ViewChild } from "@angular/core";
import { MapInfoWindow, MapMarker, GoogleMap } from "@angular/google-maps";

@Component({
  selector: "app-road-trip-app",
  templateUrl: "./road-trip-app.component.html",
  styleUrls: ["./road-trip-app.component.css"]
})
export class RoadTripAppComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;

  directionsService: google.maps.DirectionsService = new google.maps.DirectionsService();
  //directionsService: google.maps.DirectionsService;
  // directionsDisplay: google.maps.DirectionsRenderer;

  park_list: Array<any> = [
    { name: "Acadia", code: "acad" },
    { name: "Arches", code: "arch" },
    { name: "Badlands", code: "badl" },
    { name: "Big Bend", code: "bibe" },
    { name: "Biscayne", code: "bisc" }
  ];

  displayMain: boolean = false;

  // TODO: height is being forced and is not dyanmic
  height = "100vh";
  zoom = 4;
  center = {
    lat: 39,
    lng: -95
  };
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

  userLocation: google.maps.LatLng;

  constructor() {}

  ngOnInit() {
    // TODO: dynamically load a script tag instead of having it on index.html and being loaded everytime
    // const mapsScript = document.createElement('script')
    // mapsScript.setAttribute('async', '');
    // mapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD5lEDjchAFa_evQYGkddz4Gdo8cFSUE6U';
    // document.head.appendChild(mapsScript);
  }

  // If we want to make sure that the references injected by @ViewChild are present, we should always write our initialization code using ngAfterViewInit().
  // Depending on the situation, the template references might already be present on ngOnInit(), but we shouldn't count on it.
  ngAfterViewInit() {
    // Check if able to get user geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        //Place marker if location is detected
        var LatLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        let marker = new google.maps.Marker({
          position: LatLng,
          map: this.map._googleMap,
          title: "Your Location"
        });

        this.userLocation = new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );
      });
    } else {
      //TODO Handle not getting user location
      console.log(
        "Unable to get geolocation - user may have denied permission"
      );
    }

    this.loadGeojson();
  }

  loadGeojson() {
    this.park_list.forEach(park => {
      // Create data layer
      const data_layer = new google.maps.Data({ map: this.map._googleMap });

      const geojson =
        "../../../assets/documents/road-trip-app/National Parks Geojson/" +
        park.code +
        ".geojson";

      data_layer.addListener("click", event => {
        // Use getProperty function instead of linking directly to variables in the click event
        console.log(event.feature.getProperty("UNIT_NAME"));
        console.log(park.name);

        this.loadDirectionsTo(park.name);
      });

      data_layer.loadGeoJson(geojson);
    });

    // this.loadDirections();
  }

  // Testing direction loading
  loadDirectionsTo(parkName: string) {

    const directionsDisplay = new google.maps.DirectionsRenderer({
      // Right now the underlying Google Map is the _googleMap property on the GoogleMap component.
      map: this.map._googleMap
    });

    const request = {
      origin: this.userLocation,
      destination: parkName + "National Park",
      travelMode: google.maps.TravelMode.DRIVING
    };

    this.directionsService.route(request, function(response, status) {
      if (status === "OK") {
        // Display the route on the map.
        console.log(response);
        directionsDisplay.setDirections(response);
       // this.displayMain = true;

      }
    });



  }

  // zoomIn() {
  //   if (this.zoom < this.options.maxZoom) this.zoom++;
  // }

  // zoomOut() {
  //   if (this.zoom > this.options.minZoom) this.zoom--;
  // }

  // click(event: google.maps.MouseEvent) {
  //   console.log(event);
  // }

  // logCenter() {
  //   console.log(JSON.stringify(this.map.getCenter()));
  // }

  // addMarker() {
  //   this.markers.push({
  //     position: {
  //       lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
  //       lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10
  //     },
  //     label: {
  //       color: "red",
  //       text: "Marker label " + (this.markers.length + 1)
  //     },
  //     title: "Marker title " + (this.markers.length + 1),
  //     info: "Marker info " + (this.markers.length + 1),
  //     options: {
  //       animation: google.maps.Animation.BOUNCE
  //     }
  //   });
  // }

  // openInfo(marker: MapMarker, content) {
  //   this.infoContent = content;
  //   this.info.open(marker);
  // }
}
