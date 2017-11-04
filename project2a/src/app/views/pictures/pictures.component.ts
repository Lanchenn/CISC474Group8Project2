import { DialogService } from 'ng2-bootstrap-modal';
import { Component, OnInit } from '@angular/core';
import { ArtMuseumService } from '../../modules/art-museum.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']

  
})
export class PicturesComponent implements OnInit {


    NineteenthCentury: any[] = [ ];
    attributes: any[] = [ ];
    constructor(private _apiSvc: ArtMuseumService, private _dialogService: DialogService) {
      //_apiSvc.getTest();
      _apiSvc.getNineteenthCentury().subscribe(x => {

        var i:number =0;

        for (i = 0; i < x.artObjects.length; i++)
        {
          this.NineteenthCentury[i] = x.artObjects[i].webImage.url;
          console.log(this.NineteenthCentury[i]);
        }
          console.log(x);
       });
     }


//.webImage.url
/*
  showDetail(index, track) {
    console.log(index);
    console.log(track.name);
    if (this.selectedTrack === index){
      this.selectedTrack = -1;
    } else {
      this.selectedTrack = index;
    }
  }*/



    ngOnInit() {
    }

}
