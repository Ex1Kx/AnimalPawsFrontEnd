import { Component, OnInit } from '@angular/core';
import { AnunciosService } from '../services/anuncios.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  title: string="Creacion De Anuncios";
  constructor() { }

  ngOnInit(): void {
  }

}
