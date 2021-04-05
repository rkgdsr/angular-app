import {Directive, DoBootstrap, NgModule} from '@angular/core';
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
import { InMemoryDataService } from '@src/app/services/in-memory-data.service';
import { MessagesComponent } from './messages/messages.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroItemComponent } from './components/hero-item/hero-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {setAngularJSGlobal, UpgradeModule} from '@angular/upgrade/static';


import {CommonModule} from '@angular/common';

import { SharedModule } from './shared.module';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroesTopComponent,
    HeroDetailsComponent,
    MessagesComponent,
    PageNotFoundComponent,
    HeroItemComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UpgradeModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,
      {
        dataEncapsulation: false
      }
    )
  ],
  providers: [
    { provide: '$scope', useExisting: '$rootScope' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
