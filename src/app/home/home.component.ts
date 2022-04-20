import { Component, OnInit } from '@angular/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faF } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from '../services/translate-config.service';
import { CargarScriptsService } from '../Cargar-Scripts-service';
import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faLanguage = faLanguage;
  faMoon = faMoon;
  faUser = faUser;
  faNewspaper = faNewspaper;
  faWrench = faWrench;
  faHashtag = faHashtag;
  faEyeslash = faEyeSlash;
  faF = faF;
  a = 2;
  b = 1;


  constructor(public translate:TranslateService, private _CargarScripts:CargarScriptsService, private translateConfigService: TranslateConfigService ) {
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('en');
    _CargarScripts.Carga(["home/index"])
   }

  ngOnInit(): void {
  }
  changeValue1(){
    this.a = this.a + 1;
  }

  changeValue2(){
    this.b = this.b + 1;
  }
  changeLanguage(type: string) {
    this.translateConfigService.changeLanguage(type);
  }
}
