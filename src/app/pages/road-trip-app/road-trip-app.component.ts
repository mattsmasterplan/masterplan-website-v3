import {Component, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import {MapInfoWindow, MapMarker, GoogleMap} from '@angular/google-maps';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-road-trip-app',
  templateUrl: './road-trip-app.component.html',
  styleUrls: ['./road-trip-app.component.css']
})
export class RoadTripAppComponent implements OnInit {
  @ViewChild(GoogleMap, {static: false}) map: GoogleMap;
  @ViewChild(MapInfoWindow, {static: false}) info: MapInfoWindow;

  directionsService: google.maps.DirectionsService = new google.maps.DirectionsService();
  directionsDisplay: google.maps.DirectionsRenderer = new google.maps.DirectionsRenderer();

  park_list: Array<any> = [];

  nationalParkJsonData: any;

  title: String;
  distance: String;
  driveTime: String;
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
  markers = [];
  infoContent = '';

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
        const LatLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        const marker = new google.maps.Marker({
          position: LatLng,
          map: this.map._googleMap,
          title: 'Your Location'
        });

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

    // GET park information JSON
    this.http
      .get('../../../assets/documents/road-trip-app/NPS-park-data.json')
      .subscribe(
        (response: any) => {
          // Assign json data to global variable
          this.nationalParkJsonData = response.data;

          //console.log(this.nationalParkJsonData);
          // Store relevant data in global array
          this.nationalParkJsonData.forEach(element => {
            this.park_list.push({name: element.name, code: element.parkCode});
          });

          // Load GeoJson AFTER we have all the NPS park data stored
          this.loadGeojson();
        },
        err => {
          console.log(err);
        }
      );
  }

  loadGeojson() {
    // For each park in the park list, load the GeoJson data layers based off the park code
    this.park_list.forEach(park => {
      //Create data layer
      const data_layer = new google.maps.Data({map: this.map._googleMap});

      const geojson =
        '../../../assets/documents/road-trip-app/National Parks Geojson/' +
        park.code +
        '.geojson';

      data_layer.addListener('click', event => {
        this.loadDirectionsTo(park.name);
      });

      data_layer.loadGeoJson(geojson);
    });
  }

  loadDirectionsTo(parkName: string) {
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

        // Make main title panel visible
        this.showMainDisplay = true;

        // Angular won't detect the property change automatically because
        // there is no async action to be detected.
        this.changeDetector.detectChanges();
      }
    });
  }
}
