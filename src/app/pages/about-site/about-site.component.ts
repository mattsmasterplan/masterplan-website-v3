import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

export interface Dependency {
  name: string;
  link: string;
  version: string;
  check?: string;
  update?: string;
}

@Component({
  selector: 'app-about-site',
  templateUrl: './about-site.component.html',
  styleUrls: ['./about-site.component.css']
})
export class AboutSiteComponent implements OnInit {
  dependencies: Dependency[];
  buildInfo: Dependency[];

  constructor(private title: Title) {
    this.title.setTitle('MattsMasterPlan - Build Info');
  }

  ngOnInit() {
    this.dependencies = [
      {
        name: 'Angular',
        version: '10.1.1',
        link: 'https://www.npmjs.com/package/@angular/core',
        check: 'ng version',
        update: 'ng update @angular/core'
      },
      {
        name: 'Node',
        version: '10.15.1',
        link: 'https://nodejs.org/en/about'
      },
      {
        name: 'Angular Material',
        version: '10.2.0',
        link: 'https://www.npmjs.com/package/@angular/material',
        update: 'ng update @angular/material'
      },
      {
        name: 'RxJS',
        version: '6.6.3',
        link: 'https://www.npmjs.com/package/rxjs',
        update: 'ng update rxjs'
      },
      {
        name: 'TypeScript',
        version: '3.9.7',
        link: 'https://www.npmjs.com/package/typescript',
        check: 'tsc -v'
      },
      {
        name: 'Bootstrap',
        version: '4.4.1',
        link: 'https://www.getbootstrap.com',
        check: 'npm ls --depth=0'
      },
      {
        name: 'Prettier',
        version: '2.1.1',
        link: 'https://www.prettier.io/',
        check: 'prettier -v'
      }
    ];
  }
}
