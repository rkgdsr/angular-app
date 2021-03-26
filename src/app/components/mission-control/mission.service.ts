import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  constructor() { }

  private missionAnnouncedSource = new Subject<string>();
}
