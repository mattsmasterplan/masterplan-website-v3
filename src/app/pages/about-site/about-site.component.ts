import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

export interface Dependency {
  name: string;
  link: string;
  version: string;
}

@Component({
  selector: "app-about-site",
  templateUrl: "./about-site.component.html",
  styleUrls: ["./about-site.component.css"]
})
export class AboutSiteComponent implements OnInit {
  dependencies: Dependency[];
  buildInfo: Dependency[];

  constructor(private title: Title) {
    this.title.setTitle("MattsMasterPlan - Build Info");
  }

  ngOnInit() {
    this.dependencies = [
      {
        name: "Angular",
        version: "9.0.5",
        link: "https://www.npmjs.com/package/@angular/core"
      },
      {
        name: "Node",
        version: "10.15.1",
        link: "https://nodejs.org/en/about"
      },
      {
        name: "Angular Material",
        version: "9.1.0",
        link: "https://www.npmjs.com/package/@angular/material"
      },
      {
        name: "RxJS",
        version: "6.5.4",
        link: "https://www.npmjs.com/package/rxjs"
      },
      {
        name: "TypeScript",
        version: "3.7.5",
        link: "https://www.npmjs.com/package/typescript"
      },
      {
        name: "Bootstrap",
        version: "4.4.1",
        link: "https://www.getbootstrap.com"
      }
    ];
  }
}
