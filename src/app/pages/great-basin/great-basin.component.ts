import { Component, OnInit } from '@angular/core';
import { ImageDisplayDialogComponent } from './../../dialogs/image-display-dialog/image-display-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import {
  MatCarouselSlide,
  MatCarouselSlideComponent
} from '@ngmodule/material-carousel';

@Component({
  selector: 'app-great-basin',
  templateUrl: './great-basin.component.html',
  styleUrls: ['./great-basin.component.css']
})
export class GreatBasinComponent implements OnInit {
  slides = [
    { src: '../../../assets/images/great-basin/GreatBasinNP_1_600x600px.jpg' },
    { src: '../../../assets/images/great-basin/GreatBasinNP_2_600x600px.jpg' },
    { src: '../../../assets/images/great-basin/GreatBasinNP_3_600x600px.jpg' },
    { src: '../../../assets/images/great-basin/GreatBasinNP_4_600x600px.jpg' },
    { src: '../../../assets/images/great-basin/GreatBasinNP_5_602x602px.jpg' }
  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

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
