import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroItemComponent } from './components/hero-list/hero-item/hero-item.component';
import { VersionComponent } from './components/version/version.component';
import { VersionChildComponent } from './components/version/version-child/version-child.component';
import { VoteComponent } from './components/vote/vote.component';
import { VoterComponent } from './components/vote/voter/voter.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { CountdownTimerComponent } from './components/countdown/countdown-timer/countdown-timer.component';
import { CountdownLvComponent } from './components/countdown/countdown-lv/countdown-lv.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroItemComponent,
    VersionComponent,
    VersionChildComponent,
    VoteComponent,
    VoterComponent,
    CountdownComponent,
    CountdownTimerComponent,
    CountdownLvComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
