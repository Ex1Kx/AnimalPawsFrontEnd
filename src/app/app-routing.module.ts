import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NofoundComponent } from './nofound/nofound.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'announcement', component: AnnouncementComponent},
  {path: 'about-us', component:AboutUsComponent},
  {path: 'sign-up', component:SignUpComponent},
  {path: 'login', component:LoginComponent},
  {path: '**', component:NofoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
