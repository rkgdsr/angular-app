import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-family-parent',
  templateUrl: './family-parent.component.html',
  styleUrls: ['./family-parent.component.css']
})
export class FamilyParentComponent implements OnInit {

  constructor() { }

  @Output() responded = new EventEmitter<string>();

  message = 'mes';

  ngOnInit(): void {
  }

  onResponded(msg: string): void {
    this.message += msg;
  }

  onResponse(msg: string): void {
    this.responded.emit(msg);
  }


}
