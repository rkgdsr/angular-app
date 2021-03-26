import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-version-child',
  templateUrl: './version-child.component.html',
  styleUrls: ['./version-child.component.css']
})
export class VersionChildComponent implements OnChanges {

  constructor() { }

  @Input() major: number;
  @Input() minor: number;

  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    const log: string[] = [];

    for (const propName in changes) {
      const prop = changes[propName];
      const to = JSON.stringify(prop.currentValue);
      if (prop.isFirstChange()) {
        log.push(`Initial value of ${ propName } set to ${ to }`);
      } else {
        const from = JSON.stringify(prop.previousValue);
        log.push(`${ propName } changed from ${ from } to ${ to }`);
      }
    }

    this.changeLog.push(log.join(', '));
  }

}
