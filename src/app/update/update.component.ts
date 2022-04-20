import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnunciosI } from '../models/anuncios.interface';
import { AnunciosService } from '../services/anuncios.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  editarFor = new FormGroup({
    id_anuncios: new FormControl(''),
    titulo: new FormControl(''),
    descripcion: new FormControl(''),
    imagen: new FormControl('')
  });

  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
  }
  postForm(form: AnunciosI){

    console.log(form);
  }

}
