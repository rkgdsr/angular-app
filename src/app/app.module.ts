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
import { MissionControlComponent } from './components/mission-control/mission-control.component';
import { FamilyComponent } from './components/family/family.component';
import { FamilyParentComponent } from './components/family/family-parent/family-parent.component';
import { FamilyChildComponent } from './components/family/family-child/family-child.component';
import { DynamicComponent } from './components/dynamic/dynamic.component';
import { DynamicCardOneComponent } from './components/dynamic/dynamic-components/dynamic-card-one/dynamic-card-one.component';
import { DynamicCardTwoComponent } from './components/dynamic/dynamic-components/dynamic-card-two/dynamic-card-two.component';
import { DynamicDirective } from './components/dynamic/dynamic.directive';
import { DynamicComponentService } from './components/dynamic/dynamic-component.service';

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
    MissionControlComponent,
    FamilyComponent,
    FamilyParentComponent,
    FamilyChildComponent,
    DynamicComponent,
    DynamicCardOneComponent,
    DynamicCardTwoComponent,
    DynamicDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DynamicComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
