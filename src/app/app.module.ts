import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeniComponent } from './meni/meni.component';
import { ZadatakComponent } from './meni/zadatak/zadatak.component';

@NgModule({
  declarations: [
    AppComponent,
    MeniComponent,
    ZadatakComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
