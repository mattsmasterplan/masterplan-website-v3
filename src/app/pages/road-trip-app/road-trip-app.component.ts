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
  directionsDisplay: google.maps.DirectionsRenderer = new google.maps.DirectionsRenderer();

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

    // Init direction renderer after map is created
    this.directionsDisplay.setMap(this.map._googleMap);

    //hide information divs
    // casting the document query to type any in order to remove error with accessing .style
    let x = document.querySelectorAll(".panel-2, .content-2") as any;
    x.forEach(element => {
      element.style.visibility = "hidden";
    });

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
        //console.log(event.feature.getProperty("UNIT_NAME"));
        //console.log(park.name);

        this.loadDirectionsTo(park.name);
      });

      data_layer.loadGeoJson(geojson);
    });
  }

  loadDirectionsTo(parkName: string) {
    // Build directions request
    let request = {
      origin: this.userLocation,
      destination: parkName + " National Park",
      travelMode: google.maps.TravelMode.DRIVING
    };

    // Use the fat arrow function to keep directionDisplay in scope
    // Casting to type any to remove error when accessing .request
    this.directionsService.route(request, (response: any, status) => {
      if (status === "OK") {
        // Display the route on the map.
        this.directionsDisplay.setDirections(response);
        // this.displayMain = true;

        //console.log(response);
        //Set title
        document.getElementById(
          "titleDisplay"
        ).innerHTML = response.request.destination.query.toString();

        // Casting to type any to remove error when accessing .style
        var x = document.querySelectorAll(".panel-2, .content-2") as any;
        //Make information panel visible
        x.forEach(element => {
          element.style.visibility = "visible";
        });
        //Display distance and drive time
        document.getElementById("distanceOutput").innerHTML =
          "Distance: " + response.routes["0"].legs["0"].distance.text;
        document.getElementById("timeOutput").innerHTML =
          "Drive Time: " + response.routes["0"].legs["0"].duration.text;
      }
    });
  }
}
