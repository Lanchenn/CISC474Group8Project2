import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';
import { ArtMuseumService } from '../../modules/art-museum.service';


@Component({
  selector: 'app-pictures21',
  templateUrl: './pictures21.component.html',
  styleUrls: ['./pictures21.component.css']
})
export class Pictures21Component implements OnInit {

  TwentyFirstCentury: any[] = [ ];
  attributes: any[] = [ ];
  constructor(private _apiSvc: ArtMuseumService, private _dialogService: DialogService) {
    //_apiSvc.getTest();
    _apiSvc.getTwentyFirstCentury().subscribe(x => {

      var i:number =0;

      for (i = 0; i < x.artObjects.length; i++)
      {
        if(x.artObjects[i].hasImage == false){
          i++;
        }
        else{
          this.TwentyFirstCentury[i] = x.artObjects[i].webImage.url;
          console.log(this.TwentyFirstCentury[i]);
        }
      }
        console.log(x);
     });
   }

   ngOnInit() {
   }

}
