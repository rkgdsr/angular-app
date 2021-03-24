import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  agree = 0;
  disagreed = 0;

  voters = ['One', 'Two', 'Three'];

  constructor() { }

  ngOnInit(): void {
  }

  onVoted(agreed: boolean): void {
    agreed ? this.agree++ : this.disagreed++;
  }

}
