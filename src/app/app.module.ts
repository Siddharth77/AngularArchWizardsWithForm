import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ArchwizardModule } from 'angular-archwizard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArchwizardModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ AppComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
