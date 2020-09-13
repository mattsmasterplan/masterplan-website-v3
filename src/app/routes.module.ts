import {GettingStartedTypescriptComponent} from './pages/getting-started-typescript/getting-started-typescript.component';
import {ShenandoahComponent} from './pages/national-parks/shenandoah/shenandoah.component';
import {IsleRoyaleComponent} from './pages/national-parks/isle-royale/isle-royale.component';
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
import {DancaseBuildComponent} from './pages/dancase-build/dancase-build.component';
import {RoadTripAppComponent} from './pages/road-trip-app/road-trip-app.component';
import {GeojsonDownloadComponent} from './pages/geojson-download/geojson-download.component';
import {BrazilTwentytwentyComponent} from './pages/brazil-twentytwenty/brazil-twentytwenty.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: HomeComponent},
  {path: 'cuyahoga-valley', component: CuyahogaValleyComponent},
  {path: 'great-basin', component: GreatBasinComponent},
  {path: 'isle-royale', component: IsleRoyaleComponent},
  {path: 'shenandoah', component: ShenandoahComponent},
  {path: 'sources-of-the-river', component: SourcesOfTheRiverComponent},
  {path: 'dancase-build', component: DancaseBuildComponent},
  {path: 'road-trip-app', component: RoadTripAppComponent},
  {path: 'about-site', component: AboutSiteComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'geojson-download', component: GeojsonDownloadComponent},
  {
    path: 'getting-started-typescript',
    component: GettingStartedTypescriptComponent
  },
  {path: 'brazil-twentytwenty', component: BrazilTwentytwentyComponent}
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
