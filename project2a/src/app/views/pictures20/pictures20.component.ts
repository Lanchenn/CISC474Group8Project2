import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';
import { ArtMuseumService } from '../../modules/art-museum.service';

@Component({
  selector: 'app-pictures20',
  templateUrl: './pictures20.component.html',
  styleUrls: ['./pictures20.component.css']
})
export class Pictures20Component implements OnInit {

  TwentiethCentury: any[] = [ ];
  attributes: any[] = [ ];
  constructor(private _apiSvc: ArtMuseumService, private _dialogService: DialogService) {
    //_apiSvc.getTest();
    _apiSvc.getTwentiethCentury().subscribe(x => {

      var i:number =0;

      for (i = 0; i < x.artObjects.length; i++)
      {
        if(x.artObjects[i].hasImage == false){
          i++;
        }
        else{
          this.TwentiethCentury[i] = x.artObjects[i].webImage.url;
          console.log(this.TwentiethCentury[i]);
        }
      }
        console.log(x);
     });
   }
//.webImage.url
  ngOnInit() {
  }

}
