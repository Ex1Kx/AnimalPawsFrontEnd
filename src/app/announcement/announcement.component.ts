import { Component, OnInit } from '@angular/core';
import { AnunciosService } from '../services/anuncios.service';
@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent {
  title = 'APIREST';
  
  public anuncios:Array<any> = []
  constructor(
    private anunciosService:AnunciosService
  ){
  this.anunciosService.getAnuncios().subscribe((resp:any)=>{
  console.log(resp)
  this.anuncios=resp
  })
}
}
