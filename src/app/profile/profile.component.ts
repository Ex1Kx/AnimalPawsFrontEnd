import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

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
    private usersService:UsersService
  ){
  this.usersService.getUsers().subscribe((resp:any)=>{
  console.log(resp)
  this.users=resp
  })
}
}