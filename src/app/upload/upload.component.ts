import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadScriptsService } from '../load-scripts.service';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  constructor(private http:HttpClient, private _LoadScripts:LoadScriptsService) {
    _LoadScripts.Carga(["login/announcement"])
   }
  onSubmit(anuncios: any)
  {
    this.http.post('/api/Anuncios', anuncios)
    .subscribe((result)=>{
      console.warn("result", result)
    })
    console.warn(anuncios)
  }
  ngOnInit(): void {
  }
}
