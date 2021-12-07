import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { LoadScriptsService } from '../load-scripts.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
  title = 'APIREST';
  
  public anuncios:Array<any> = []
  users: any;
  constructor(
    private usersService:UsersService,
    private _LoadScripts:LoadScriptsService
  ){
    _LoadScripts.Carga(["announcement/function"])
  this.usersService.getUsers().subscribe((resp:any)=>{
  console.log(resp)
  this.users=resp
  })
}
}