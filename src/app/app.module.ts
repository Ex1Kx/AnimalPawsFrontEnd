import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileFoundationComponent } from './profile-foundation/profile-foundation.component';
import { InformationFoundationComponent } from './information-foundation/information-foundation.component';
import { NewsFoundationComponent } from './news-foundation/news-foundation.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileFoundationComponent,
    InformationFoundationComponent,
    NewsFoundationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
