import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ArtMuseumService {
  results: string[];
  baseUri: string;
  limit = 100;
   private headers = new Headers({
    'Content-Type': 'application/json'
  });
  constructor(private http: Http) {
  }

  getNineteenthCentury = () => this.http.get(
    'https://www.rijksmuseum.nl/api/nl/collection?key=jObXZTXX&format=json&ps=100&f.dating.period=17').map(x => {
        return x.json();
      })

  getTwentiethCentury = () => this.http.get(
    'https://www.rijksmuseum.nl/api/nl/collection?key=jObXZTXX&format=json&ps=100&f.dating.period=18').map(x => {
        return x.json();
      })

  getTwentyFirstCentury = () => this.http.get(
    'https://www.rijksmuseum.nl/api/nl/collection?key=jObXZTXX&format=json&ps=100&f.dating.period=19').map(x => {
        return x.json();
      })

}
