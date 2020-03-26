import { Component, OnInit, ViewChild, ChangeDetectorRef, Input } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import { HttpClient } from '@angular/common/http';

// Import NPS Park Data from json file as an object
import { data as parkData } from '../../../assets/documents/road-trip-app/NPS-park-data.json';



@Component({
  selector: 'app-road-trip-app',
  templateUrl: './road-trip-app.component.html',
  styleUrls: ['./road-trip-app.component.css']
})
export class RoadTripAppComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;

  @Input() parkData: any;

  directionsService: google.maps.DirectionsService = new google.maps.DirectionsService();
  directionsDisplay: google.maps.DirectionsRenderer = new google.maps.DirectionsRenderer();
  park_list: Array<any> = [];
  nationalParkJsonData: JSON;


  title: String;
  distance: String;
  driveTime: String;
  description: String;
  showMainDisplay: boolean;

  // TODO: height is being forced and is not dyanmic
  height = '90vh';
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
  markers = [];


  userLocation: google.maps.LatLng;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private http: HttpClient
  ) {
    // hide main title display
    this.showMainDisplay = false;
  }

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
        // Place marker if location is detected
        this.markers.push(new google.maps.Marker({
          position: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          map: this.map._googleMap,
          title: 'Your Location'
        }));
        // Store user location in outer scope for use
        this.userLocation = new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );
      });
    } else {
      // TODO Handle not getting user location
      console.log(
        'Unable to get geolocation - user may have denied permission'
      );
    }

    // Init direction renderer after map is created
    this.directionsDisplay.setMap(this.map._googleMap);


    // Build park list like this for now
    // TODO get *ngFor in html working with parkData object as opposed to using park_list
    parkData.forEach(park => {
      console.log(park);
      this.park_list.push({ "name": park.name, "description": park.description });
    });


    console.log(this.park_list);

    // Load GeoJson after everything else is initialized
    this.loadGeojson();
  }

  loadGeojson() {
    // For each park in the park list, load the GeoJson data layers based off the park code
    parkData.forEach(park => {
      //Create data layer
      const data_layer = new google.maps.Data({ map: this.map._googleMap });

      const geojson =
        '../../../assets/documents/road-trip-app/National Parks Geojson/' +
        park.parkCode +
        '.geojson';

      data_layer.addListener('click', event => {
        this.loadDirectionsTo(park.name, park.description);
      });

      data_layer.loadGeoJson(geojson);
    });
  }

  loadDirectionsTo(parkName: string, parkDescription: string) {
    // Build directions request
    const request = {
      origin: this.userLocation,
      destination: parkName + ' National Park',
      travelMode: google.maps.TravelMode.DRIVING
    };

    // Use the fat arrow function to keep directionDisplay in scope
    // Casting response to type any to remove error when accessing .request
    this.directionsService.route(request, (response: any, status) => {
      if (status === 'OK') {
        // Display the route on the map.
        this.directionsDisplay.setDirections(response);

        // Set title
        this.title = response.request.destination.query.toString();

        // Set distance and drive time
        this.distance = response.routes['0'].legs['0'].distance.text;
        this.driveTime = response.routes['0'].legs['0'].duration.text;

        this.description = parkDescription;

        // Make main title panel visible
        this.showMainDisplay = true;

        // Angular won't detect the property change automatically because
        // there is no async action to be detected.
        this.changeDetector.detectChanges();
      }
    });
  }
}
