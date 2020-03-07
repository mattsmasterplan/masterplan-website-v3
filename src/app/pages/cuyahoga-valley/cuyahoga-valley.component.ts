import { ImageDisplayDialogComponent } from './../../dialogs/image-display-dialog/image-display-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-cuyahoga-valley',
  templateUrl: './cuyahoga-valley.component.html',
  styleUrls: ['./cuyahoga-valley.component.css']
})
export class CuyahogaValleyComponent implements OnInit {
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
