import {Component, OnInit} from '@angular/core';
import {ImageDisplayDialogComponent} from './../../dialogs/image-display-dialog/image-display-dialog.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-brazil-twentytwenty',
  templateUrl: './brazil-twentytwenty.component.html',
  styleUrls: ['./brazil-twentytwenty.component.css']
})
export class BrazilTwentytwentyComponent implements OnInit {
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
