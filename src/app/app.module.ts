import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './elements/navbar/navbar.component';
import {FooterComponent} from './elements/footer/footer.component';
import {HomeComponent} from './pages/home/home.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatCarouselModule} from '@ngmodule/material-carousel';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';

import {GoogleMapsModule} from '@angular/google-maps';

import {RoutesModule} from './routes.module';
import {CuyahogaValleyComponent} from './pages/cuyahoga-valley/cuyahoga-valley.component';
import {GreatBasinComponent} from './pages/great-basin/great-basin.component';
import {SourcesOfTheRiverComponent} from './pages/sources-of-the-river/sources-of-the-river.component';
import {DancaseBuildComponent} from './pages/dancase-build/dancase-build.component';
import {RoadTripAppComponent} from './pages/road-trip-app/road-trip-app.component';
import {ImageDisplayDialogComponent} from './dialogs/image-display-dialog/image-display-dialog.component';
import {AboutSiteComponent} from './pages/about-site/about-site.component';
import {AboutMeComponent} from './pages/about-me/about-me.component';
import {ContactComponent} from './pages/contact/contact.component';
import {GeojsonDownloadComponent} from './pages/geojson-download/geojson-download.component';
import {IsleRoyaleComponent} from './pages/national-parks/isle-royale/isle-royale.component';
import {ShenandoahComponent} from './pages/national-parks/shenandoah/shenandoah.component';
import {GettingStartedTypescriptComponent} from './pages/getting-started-typescript/getting-started-typescript.component';
import {BrazilTwentytwentyComponent} from './pages/brazil-twentytwenty/brazil-twentytwenty.component';

import { YouTubePlayerModule } from "@angular/youtube-player";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CuyahogaValleyComponent,
    GreatBasinComponent,
    SourcesOfTheRiverComponent,
    DancaseBuildComponent,
    RoadTripAppComponent,
    ImageDisplayDialogComponent,
    AboutSiteComponent,
    AboutMeComponent,
    ContactComponent,
    GeojsonDownloadComponent,
    IsleRoyaleComponent,
    ShenandoahComponent,
    GettingStartedTypescriptComponent,
    BrazilTwentytwentyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RoutesModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatDividerModule,
    MatChipsModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatListModule,
    MatGridListModule,
    MatTabsModule,
    MatCarouselModule.forRoot(),
    GoogleMapsModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
