import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent implements OnInit {
  major = 1;
  minor = 20;

  newMinor(): void {
    this.minor++;
  }

  newMajor(): void {
    this.major++;
    this.minor = 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
