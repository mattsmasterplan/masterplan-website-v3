import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brazil-twentytwenty',
  templateUrl: './brazil-twentytwenty.component.html',
  styleUrls: ['./brazil-twentytwenty.component.css']
})
export class BrazilTwentytwentyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  switchStyle() {
    if (document.getElementById('styleSwitch').checked) {
      document.getElementById('gallery').classList.add("custom");
      document.getElementById('exampleModal').classList.add("custom");
    } else {
      document.getElementById('gallery').classList.remove("custom");
      document.getElementById('exampleModal').classList.remove("custom");
    }
  }

}
