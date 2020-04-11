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

function add(x, y) {
  return x + y;
}

function fun<T>(args: T): T {
  return args;
}
