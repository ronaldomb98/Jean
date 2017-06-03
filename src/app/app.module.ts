import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JgavalService } from "app/jgaval.service";
import { JgavalComponent } from './components/jgaval/jgaval.component';
import { MasonryModule } from 'angular2-masonry';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { appRouting } from "app/routing.component";
import { CreateProductComponent } from './components/create-product/create-product.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    JgavalComponent,
    HeaderComponent,
    FooterComponent,
    CreateProductComponent,
    FormProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MasonryModule,
    appRouting
  ],
  providers: [JgavalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
