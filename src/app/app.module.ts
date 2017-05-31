import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JgavalService } from "app/jgaval.service";
import { JgavalComponent } from './components/jgaval/jgaval.component';
import { MasonryModule } from 'angular2-masonry';
@NgModule({
  declarations: [
    AppComponent,
    JgavalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MasonryModule
  ],
  providers: [JgavalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
