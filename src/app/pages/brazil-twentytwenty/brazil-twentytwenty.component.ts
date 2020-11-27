import {Component, ViewChild, OnInit} from '@angular/core';
import {ImageDisplayDialogComponent} from './../../dialogs/image-display-dialog/image-display-dialog.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {MapInfoWindow, MapMarker, GoogleMap} from '@angular/google-maps';

@Component({
  selector: 'app-brazil-twentytwenty',
  templateUrl: './brazil-twentytwenty.component.html',
  styleUrls: ['./brazil-twentytwenty.component.css']
})
export class BrazilTwentytwentyComponent implements OnInit {
  @ViewChild(GoogleMap, {static: false}) map: GoogleMap;
  constructor(private dialog: MatDialog) {}
  markers = [];
  height = '40vh';
  zoom = 6;
  center = {
    lat: -24,
    lng: -48
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

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.markers.push(
      new google.maps.Marker({
        position: {
          lat: -22.9068,
          lng: -43.1729
        },
        map: this.map._googleMap,
        title: 'Rio de Janiero'
      }),

      new google.maps.Marker({
        position: {
          lat: -25.6953,
          lng: -54.4367
        },
        map: this.map._googleMap,
        title: 'Iguazu Falls'
      }),

      new google.maps.Marker({
        position: {
          lat: -23.0057,
          lng: -44.3158
        },
        map: this.map._googleMap,
        title: 'Angra dos Reis'
      })
    );
  }

  openDialog(folder: string, filename: string) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.height = 'auto';
    dialogConfig.width = 'auto';

    dialogConfig.data = {
      folder,
      filename
    };

    this.dialog.open(ImageDisplayDialogComponent, dialogConfig);
  }
}
