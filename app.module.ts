import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { GameControlComponent } from './parent/game-control/game-control.component';
import { EvenComponent } from './parent/even/even.component';
import { OddComponent } from './parent/odd/odd.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
