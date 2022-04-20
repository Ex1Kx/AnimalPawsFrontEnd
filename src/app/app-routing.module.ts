import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NofoundComponent } from './nofound/nofound.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { NewsComponent } from './news/news.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './update/update.component';
import { FundInfoComponent } from './fund-info/fund-info.component';
import { FundNewsComponent } from './fund-news/fund-news.component';
import { FundProfileComponent } from './fund-profile/fund-profile.component';
import { ContribuitorComponent } from './contribuitor/contribuitor.component';

const routes: Routes = [
  {path:'', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'announcement', component: AnnouncementComponent},
  {path: 'About', component:AboutUsComponent},
  {path: 'SignUp', component:SignUpComponent},
  {path: 'login', component:LoginComponent},
  {path: 'upload', component:UploadComponent},
  {path: 'news', component:NewsComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'update', component:UpdateComponent},
  {path: 'Contribuitor', component:ContribuitorComponent},
  {path: 'FundationInfo', component:FundInfoComponent},
  {path: 'FundationNews', component:FundNewsComponent},
  {path: 'FundationProfile', component:FundProfileComponent},
  {path: '**', component:NofoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
