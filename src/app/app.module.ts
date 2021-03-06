import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { LoadScriptsService } from './load-scripts.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
export function HttpLoaderFactory(http: HttpClient){
  return new  TranslateHttpLoader(http, './assets/lang/', '.json')
}

import { CargarScriptsService } from './Cargar-Scripts-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NofoundComponent } from './nofound/nofound.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { ProfileComponent } from './profile/profile.component';
import { NewsComponent } from './news/news.component';
import { UpdateComponent } from './update/update.component';
import { FundInfoComponent } from './fund-info/fund-info.component';
import { FundNewsComponent } from './fund-news/fund-news.component';
import { FundProfileComponent } from './fund-profile/fund-profile.component';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnnouncementComponent,
    AboutUsComponent,
    NofoundComponent,
    SignUpComponent,
    LoginComponent,
    UploadComponent,
    ProfileComponent,
    NewsComponent,
    UpdateComponent,
    FundInfoComponent,
    FundNewsComponent,
    FundProfileComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    LoadScriptsService,
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
