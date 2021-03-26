import { Component } from '@angular/core';
import {Hero, HEROES} from './components/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';

  heroes: Hero[] = HEROES;
}
