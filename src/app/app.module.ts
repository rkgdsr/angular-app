import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroesTopComponent } from './components/heroes-top/heroes-top.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroesTopComponent,
    HeroDetailsComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'dashboard', component: HeroesTopComponent},
      {path: 'heroes', component: HeroesListComponent},
      {path: 'details/:id', component: HeroDetailsComponent},
    ]),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,
      {
        dataEncapsulation: false
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
