import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../load-scripts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _LoadScripts:LoadScriptsService
  ) { 
    _LoadScripts.Carga(["login/function"])
  }

  ngOnInit(): void {
  }

}
