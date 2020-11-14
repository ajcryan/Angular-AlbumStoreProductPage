import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import rxjs/add/operator/map;

@Injectable()
export class ProductService {

_albumUrl = "../assets/album.json";

var getAlbum = function(number id){
	return this._http.get(_albumUrl)
	.then.response.json();
}

return {
	getAlbum: getAlbum
}

  constructor(private _http: Http) {  }

}
