import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  education = [
    {
      src: '../../../assets/images/about-me/emu-logo.png',
      title: 'Bachelor degree in Computer Science',
      subtitleOne: 'Eastern Michigan University, Ypsilanti, MI',
      subtitleTwo: '2018 - 2020',
      content:
        'I used my time at Eastern to learn about the aspects of computer science that interest me most. My elective classes were focused on studying database principles, big data, and cybersecurity. The required classes in Eastern\'s curriculum taught me advanced concepts of computer science using the Java language. I was also able to study GIS and cartography which earned me a minor in Geography.'
    },
    {
      src: '../../../assets/images/about-me/wcc-logo.jpg',
      title: 'Associate degree in Computer Science: Programming in Java',
      subtitleOne: 'Washtenaw Community College, Ann Arbor, MI',
      subtitleTwo: '2013 - 2015',
      content:
        'At WCC I developed a foundation for programming using the Java language. An elective class I took on Android programming really stood out to me and I still enjoy working with Android applications.'
    }
  ];

  experience = [
    {
      title: 'WEB & GIS Programmer',
      subtitleOne: 'USHR Inc., Livonia, MI',
      subtitleTwo: 'May 2020 - Present',
      content: 'Creating web based tools to support high definition map technology used in autonomous vehicles.',
      chips: ['Vue', 'JavaScript', 'PostgreSQL', 'GIS', 'Geoserver']
    },
    {
      title: 'Full Stack Web Developer',
      subtitleOne: 'Applied Dynamics International, Ann Arbor, MI',
      subtitleTwo: 'Jul 2018 - Jan 2019',
      content: 'Managed the internal web pages, applications, and databases using primarily the LAMP stack and Angular/JavaScript. Implemented the SAML security standard to use single sign-on and two factor authentication on existing web applications.',
      chips: ['Angular', 'PHP', 'MySql', 'SAML', '2FA']
    },
    {
      title: 'Web Application Developer',
      subtitleOne: 'Drew Technologies, Ann Arbor, MI',
      subtitleTwo: 'Jan 2016 - May 2018',
      content: 'Developed web applications to assist an automotive services call center with managing queues. I primarily worked with AngularJS/JavaScript. Industry knowledge of interfacing with vehicles (OBD2) using the web and Bluetooth technologies. Further knowledge of vehicle control modules and automotive programming was required to complete the applications I developed.',
      chips: ['Angular', '.NET', 'API\'s']
    },
    {
      title: 'Frontend Web Developer',
      subtitleOne: 'Fusion Digital, Dexter, MI',
      subtitleTwo: 'Jan 2015 - Dec 2015',
      content: 'Deployed and managed the company website using Bootstrap and JavaScript framework. Integrated customer account creation and secure token based credit card processing. Worked to automate the process of a customer uploading a design file to the product being printed on industrial 3D printers.',
      chips: ['HTML5/CSS3', 'JavaScript', 'PHP', 'Bootstrap']
    }
  ]


  constructor() {

  }

  ngOnInit(): void {}
}
