import { HeroesService } from '../heroes.service';

export function heroesServiceFactory(i: any): any {
  return i.get('heroes');
}

export const heroesServiceProvider = {
  provide: HeroesService,
  useFactory: heroesServiceFactory,
  deps: ['$injector']
};
