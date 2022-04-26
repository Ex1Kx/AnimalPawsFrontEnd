import { Component, OnInit } from '@angular/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contribuitors',
  templateUrl: './contribuitors.component.html',
  styleUrls: ['./contribuitors.component.scss']
})
export class ContribuitorsComponent implements OnInit {
  faLanguage = faLanguage;
  faMoon = faMoon;
  faUser = faUser;
  faNewspaper = faNewspaper;
  faWrench = faWrench;
  faHashtag = faHashtag;
  faEyeslash = faEyeSlash;


  constructor() { }

  ngOnInit(): void {
  }

}
