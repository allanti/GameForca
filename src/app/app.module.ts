import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormLeftComponent } from './components/form-left/form-left.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { GallowComponent } from './components/gallow/gallow.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FormLeftComponent,
    ScoreboardComponent,
    GallowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
