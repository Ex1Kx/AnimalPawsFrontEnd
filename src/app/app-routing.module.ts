import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SignComponent } from './sign/sign.component';
import { PreviewComponent } from './preview/preview.component';
import { ContribuitorsComponent } from './contribuitors/contribuitors.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'AboutUs', component: AboutComponent},
  {path: 'SignIn', component:SignComponent},
  {path: 'Preview', component:PreviewComponent},
  {path: 'Contribuitors', component:ContribuitorsComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
