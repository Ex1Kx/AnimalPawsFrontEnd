import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {
_url = '/api/Anuncios'
  constructor(
    private http: HttpClient 
  ) { 
    console.log("Servicio Anuncios xd")
  }
  getAnuncios(){
  let header = new HttpHeaders()
  .set('Type-content', 'aplication/json')

return this.http.get(this._url, {
  headers: header
});
  }
}
