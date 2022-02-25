//*Aqui Se Importa La Api Para Consumirla En El Apartado De Anuncios
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

import { ResponseI } from '../models/response.interface';
import { Observable, observable } from 'rxjs';

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
  deleteAnuncio(id: string):Observable<{}>{
    this._url = `${this._url}/${id}`;
    return this.http.delete(this._url);
  }
}
