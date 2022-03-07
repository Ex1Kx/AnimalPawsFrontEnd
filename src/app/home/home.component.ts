import { Component, OnInit } from '@angular/core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faHouse = faHouse;
  faInfo = faInfo;
  faNewspaper = faNewspaper;
  faUser = faUser;

  constructor(public translate:TranslateService) {
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('es');
    this.translate.use('en');
   }

  ngOnInit(): void {
  }

}
