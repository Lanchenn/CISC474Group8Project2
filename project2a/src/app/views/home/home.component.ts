import { DialogService } from 'ng2-bootstrap-modal';
import { Component, OnInit } from '@angular/core';
import { ArtMuseumService } from '../../modules/art-museum.service';
//import {ArtistPopupComponent} from './artist-popup/artist-popup.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  NineteenthCentury: any[] = [ ];
  attributes: any[] = [ ];
  constructor(private _apiSvc: ArtMuseumService, private _dialogService: DialogService) {
    _apiSvc.getNineteenthCentury(1).subscribe(x => {
      this.NineteenthCentury = x.NineteenthCentury.artist;
      this.attributes = x.NineteenthCentury['@attr'];
     });
   }

  ngOnInit() {
  }

}
