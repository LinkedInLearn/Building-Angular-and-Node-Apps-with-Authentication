import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule} from '@angular/material';

import { AppComponent }  from './app.component';
import { MessagesComponent } from './messages.component';


@NgModule({
  declarations: [
      AppComponent, MessagesComponent 
      ],
  imports:      [ 
      BrowserModule, BrowserAnimationsModule, MatButtonModule, MatCardModule
      ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
