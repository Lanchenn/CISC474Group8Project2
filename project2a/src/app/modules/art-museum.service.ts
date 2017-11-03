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

  getTest(): void {
    this.http.get('https://www.rijksmuseum.nl/api/nl/collection?key=jObXZTXX&format=json&f.dating.period=19').subscribe(data => {
      this.results = data['artObjects'];
      console.log(this.results);
    })
  }

  getNineteenthCentury = () => this.http.get(
    'https://www.rijksmuseum.nl/api/nl/collection?key=jObXZTXX&format=json&f.dating.period=19').map(x => {
        return x.json();
      })

  getTwentyCentury = (page: number) => this.http.get(
    'https://www.rijksmuseum.nl/api/nl/collection?key=jObXZTXX&format=json&f.dating.period=20'
    + '&page=' + page).map(x => {
        console.log(x.json());
        return x.json();
      })
}
