import { Injectable } from '@angular/core';
// tslint:enable:no-unused-variable
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) {}

  getAlbum(id: number) {
    return this._http.get(this._albumUrl).map(response => response.json());
  }
}
