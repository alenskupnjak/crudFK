import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


// importirano nakon javljanja greške u consoli

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeniComponent } from './meni/meni.component';
import { ZadatakComponent } from './meni/zadatak/zadatak.component';
import { ZadaciService } from './servis/zadaci.service';

@NgModule({
  declarations: [
    AppComponent,
    MeniComponent,
    ZadatakComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [ZadaciService],
  bootstrap: [AppComponent]
})
export class AppModule { }
