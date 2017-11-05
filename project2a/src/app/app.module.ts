import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {BootstrapModalModule} from 'ng2-bootstrap-modal';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { PicturesComponent } from './views/pictures/pictures.component';
import { ArtMuseumService } from './modules/art-museum.service';
import { Pictures21Component } from './views/pictures21/pictures21.component';
import { Pictures20Component } from './views/pictures20/pictures20.component';
//import {CollapseModule} from 'ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PicturesComponent,
    Pictures21Component,
    Pictures20Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BootstrapModalModule,
    //CollapseModule.forRoot()
  ],
  providers: [ArtMuseumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
