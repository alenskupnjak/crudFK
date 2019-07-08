import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


// importirano nakon javljanja greške u consoli
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ovim omogucuje zapis u bazu samo datuma
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeniComponent } from './meni/meni.component';
import { ZadatakComponent } from './meni/zadatak/zadatak.component';
import { ZadaciService } from './servis/zadaci.service';
import { environment } from 'src/environments/environment';
import { ListaZadatakaComponent } from './meni/lista-zadataka/lista-zadataka.component';

@NgModule({
  declarations: [
    AppComponent,
    MeniComponent,
    ZadatakComponent,
    ListaZadatakaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [ZadaciService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
