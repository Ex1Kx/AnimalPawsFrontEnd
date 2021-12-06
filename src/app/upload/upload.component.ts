import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  constructor(private http:HttpClient) { }
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
