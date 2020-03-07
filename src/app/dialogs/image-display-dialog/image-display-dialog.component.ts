import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-image-display-dialog',
  templateUrl: './image-display-dialog.component.html',
  styleUrls: ['./image-display-dialog.component.css']
})
export class ImageDisplayDialogComponent implements OnInit {
  folder: string;
  filename: string;

  imgPath = '../../../assets/images/';

  constructor(@Inject(MAT_DIALOG_DATA) data) {
    this.folder = data.folder;
    this.filename = data.filename;

    this.imgPath += this.folder + '/' + this.filename;
  }

  ngOnInit(): void {}
}
