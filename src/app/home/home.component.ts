import { Component, OnInit } from '@angular/core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { CargarScriptsService } from '../Cargar-Scripts-service';
import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faHouse = faHouse;
  faAddressCard = faAddressCard;
  faNewspaper = faNewspaper;
  faUser = faUser;
  faEyeSlash = faEyeSlash;

  constructor(public translate:TranslateService, private _CargarScripts:CargarScriptsService ) {
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    _CargarScripts.Carga(["home/index"])
   }

  ngOnInit(): void {
  }
}
