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

function warnUser(): void {
  console.log('This is my warning message');
}

let u: undefined = undefined;
let n: null = null;

function error(message: string): never {
  throw new Error(message);
}

let input = [1, 2];
let [first, second] = input;
