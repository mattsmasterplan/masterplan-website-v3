import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-getting-started-typescript',
  templateUrl: './getting-started-typescript.component.html',
  styleUrls: ['./getting-started-typescript.component.css']
})
export class GettingStartedTypescriptComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}
