import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-family-child',
  templateUrl: './family-child.component.html',
  styleUrls: ['./family-child.component.css']
})
export class FamilyChildComponent implements OnInit {

  constructor() { }

  message = 'child';

  @Input() item: string;

  @Output() responded = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onResponded(msg: string): void {
    this.message += msg;
  }

  onResponse(msg: string): void {
    this.responded.emit(msg);
  }

}
