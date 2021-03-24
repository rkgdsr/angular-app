import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CountdownTimerComponent} from './countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, AfterViewInit {

  constructor() { }


  @ViewChild(CountdownTimerComponent)
  private timerComponent: CountdownTimerComponent;

  seconds(): number {
    return 0;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start(): void {
    this.timerComponent.start();
  }

  stop(): void {
    this.timerComponent.stop();
  }
}
