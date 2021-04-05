import { Injectable } from '@angular/core';
import {HeroesService} from '@src/app/services/heroes.service';

@Injectable({
  providedIn: 'root'
})
export class MainFilterWorkerService {

  private worker: Worker;
  private workerCreated = false;

  constructor() {
    this.initWorker();
  }

  initWorker(): void {
    if (this.workerCreated) {
      return;
    }
    this.worker = new Worker('@src/app/workers/main-filter.worker', { type: 'module' });
    this.workerCreated = true;

  }

  getByFilter(data: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.worker.postMessage(data);
      const eventListener = (event: MessageEvent) => {
        this.worker.removeEventListener('message', eventListener);
        resolve(event.data.result);
      };

      this.worker.addEventListener('message', eventListener);
    });
  }
}
