import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  constructor() { }

  @Input() name: string;

  @Output() voted = new EventEmitter<boolean>();

  didVote = false;

  ngOnInit(): void {
  }

  vote(agreed: boolean): void {
    this.voted.emit(agreed);
    this.didVote = true;
  }
}
