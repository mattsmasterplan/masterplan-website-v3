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

//let isDone: boolean = 'false';

//isDone = true;

let x: [string, number];
x = ['hello', 10];

console.log(x[0].substring(1));

enum Color {
  Red = 1,
  Green,
  Blue
}

let c: Color = Color.Green;
let colorName: string = Color[2];
