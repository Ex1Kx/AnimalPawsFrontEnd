import { Component } from '@angular/core';
import { AnunciosService } from './services/anuncios.service';
import { TranslateService } from '@ngx-translate/core';
import { AnnouncementComponent } from './announcement/announcement.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APIREST';
  public anuncios:Array<any> = []

  constructor(public translate:TranslateService, private anunciosService:AnunciosService) {
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('es');
    this.anunciosService.getAnuncios().subscribe((resp: any)=>{
      console.log(resp)
      this.anuncios=resp
    })
  }
}
