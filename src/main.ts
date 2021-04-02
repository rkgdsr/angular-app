import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { setAngularJSGlobal, UpgradeModule } from '@angular/upgrade/static';
import angular from 'angular';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { AppModule as OldAppModule } from './app/old';

setAngularJSGlobal(angular);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then((platformRef) => {
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;

    upgrade.bootstrap(document.documentElement, [OldAppModule.moduleName], { strictDi: true });
  })
  .catch(err => console.error(err));

