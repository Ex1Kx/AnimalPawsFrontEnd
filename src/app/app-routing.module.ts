import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InformationFoundationComponent } from './information-foundation/information-foundation.component';
import { NewsFoundationComponent } from './news-foundation/news-foundation.component';
import { ProfileFoundationComponent } from './profile-foundation/profile-foundation.component';


const routes: Routes = [
  { path: '*', component: HomeComponent },
  { path: 'profile', component: ProfileFoundationComponent },
  { path: 'information', component: InformationFoundationComponent },
  { path: 'news', component: NewsFoundationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
