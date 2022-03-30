import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../load-scripts.service';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faHouse = faHouse;
  faAddressCard = faAddressCard;
  faNewspaper = faNewspaper;
  faUser = faUser;
  faEyeSlash = faEyeSlash;


  constructor(
    private _LoadScripts:LoadScriptsService
  ) { 
    _LoadScripts.Carga(["login/function"])
  }

  ngOnInit(): void { 
  }

}
