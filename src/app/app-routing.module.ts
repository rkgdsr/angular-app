import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesTopComponent} from './components/heroes-top/heroes-top.component';
import {HeroesListComponent} from './components/heroes-list/heroes-list.component';
import {HeroDetailsComponent} from './components/hero-details/hero-details.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'dashboard', component: HeroesTopComponent},
  {path: 'heroes', component: HeroesListComponent},
  {path: 'details/:id', component: HeroDetailsComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
