import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesTopComponent} from './components/heroes-top/heroes-top.component';
import {HeroesListComponent} from './components/heroes-list/heroes-list.component';
import {HeroDetailsComponent} from './components/hero-details/hero-details.component';


const routes: Routes = [
  {path: 'dashboard', component: HeroesTopComponent},
  {path: 'heroes', component: HeroesListComponent},
  {path: 'details/:id', component: HeroDetailsComponent},
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
