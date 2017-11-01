import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { PicturesComponent } from './views/pictures/pictures.component';
import { ArtMuseumService } from './modules/art-museum.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PicturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ArtMuseumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
