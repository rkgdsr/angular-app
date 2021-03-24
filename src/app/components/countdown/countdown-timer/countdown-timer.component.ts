import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {

  constructor() { }

  intervalId = 0;
  message = '';
  seconds = 11;

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }


  start(): void {
    this.countDown();
  }

  stop(): void {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds}`;
  }

  private clearTimer(): void {
    clearInterval(this.intervalId);

  }

  private countDown(): void {
    clearInterval(this.intervalId);

    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) { this.seconds = 10; }
        this.message = `T-${this.seconds}`;
      }
    }, 1000);
  }
}
