import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ArtMuseumService {
  baseUri: string;
  limit = 100;
   private headers = new Headers({
    'Content-Type': 'application/json'
  });
  constructor(private http: Http, baseAPIUri: string) {
    this.baseUri = baseAPIUri;
  }
}

getNineteenthCentury = (page: number) => this.http.get(
  'http://www.rijksmuseum.nl/api/nl/collection?key=jObXZTXX&format=json&f.dating.period=19' +
  + '&page=' + page,
    { headers: this.headers }).map(x => {
      console.log(x.json());
      return x.json();
    })

getTwentyCentury = (page: number) => this.http.get(
  'http://www.rijksmuseum.nl/api/nl/collection?key=jObXZTXX&format=json&f.dating.period=20' +
  + '&page=' + page,
    { headers: this.headers }).map(x => {
      console.log(x.json());
      return x.json();
    })