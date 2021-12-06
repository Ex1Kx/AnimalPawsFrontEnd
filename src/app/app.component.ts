import { Component } from '@angular/core';
import { AnunciosService } from './services/anuncios.service';
import { AnnouncementComponent } from './announcement/announcement.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APIREST';
  public anuncios:Array<any> = []

  constructor(
    private anunciosService:AnunciosService
  ){
    this.anunciosService.getAnuncios().subscribe((resp: any)=>{
      console.log(resp)
      this.anuncios=resp
    })
  }
}
