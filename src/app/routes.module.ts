import {AboutSiteComponent} from './pages/about-site/about-site.component';
import {AboutMeComponent} from './pages/about-me/about-me.component';
import {ContactComponent} from './pages/contact/contact.component';
import {CuyahogaValleyComponent} from './pages/cuyahoga-valley/cuyahoga-valley.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {GreatBasinComponent} from './pages/great-basin/great-basin.component';
import {SourcesOfTheRiverComponent} from './pages/sources-of-the-river/sources-of-the-river.component';
// import { ProjectsComponent } from '@pages/projects/projects.component';
// import { BuildInfoComponent } from '@pages/build-info/build-info.component';
// import { PlexComponent } from '@pages/plex/plex.component';
// import { ContactComponent } from '@pages/contact/contact.component';
// import { PageNotFoundComponent } from '@pages/page-not-found/page-not-found.component';
import {DancaseBuildComponent} from './pages/dancase-build/dancase-build.component';
import {RoadTripAppComponent} from './pages/road-trip-app/road-trip-app.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: HomeComponent},
  {path: 'cuyahoga-valley', component: CuyahogaValleyComponent},
  {path: 'great-basin', component: GreatBasinComponent},
  {path: 'sources-of-the-river', component: SourcesOfTheRiverComponent},
  {path: 'dancase-build', component: DancaseBuildComponent},
  {path: 'road-trip-app', component: RoadTripAppComponent},
  {path: 'about-site', component: AboutSiteComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'contact', component: ContactComponent}
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false}),
    CommonModule
  ],
  exports: [RouterModule]
})
export class RoutesModule {}
