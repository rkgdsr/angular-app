import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroesTopComponent } from './components/heroes-top/heroes-top.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroesTopComponent,
    HeroDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'dashboard', component: HeroesTopComponent},
      {path: 'heroes', component: HeroesListComponent},
      {path: 'details/:id', component: HeroDetailsComponent},
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
