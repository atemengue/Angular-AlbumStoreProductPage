import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Http } from '@angular/http';
=======
import { Http, Response } from '@angular/http';
>>>>>>> 1d6b63b017767f987c019f1027cc79ffb8ff0f83
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Album } from './album';
@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) {}

  getAlbum(id: number): Observable<Album> {
    return this._http
      .get(this._albumUrl)
      .map(response => <Album>response.json());
  }
}
