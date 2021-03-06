import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { ZadaciService } from '../../servis/zadaci.service';
import { ObavijestiService } from '../../servis/obavijesti.service';

@Component({
  selector: 'app-zadatak',
  templateUrl: './zadatak.component.html',
  styleUrls: ['./zadatak.component.scss']
})



export class ZadatakComponent implements OnInit {
  vrijemeUnosa: string;

  constructor(
    public zadatakServis: ZadaciService,
    public obavijest: ObavijestiService,
    public dialogRef: MatDialogRef<ZadatakComponent>
    ) { }


  date: Date;

  ngOnInit() {
    this.zadatakServis.dohvatiSveZadatke();
  }

  onDataChange(newdate) {
    let date = new Date;
    let sati = date.getHours();
    let minute = date.getMinutes();
    let sekunde = date.getSeconds();
    this.vrijemeUnosa = sati + 'h-' + minute + 'min-' + sekunde + 'sec';
    this.zadatakServis.polja.get('vrijeme').setValue(this.vrijemeUnosa);
  }

  ocistiPolja() {
    this.zadatakServis.polja.reset();
    this.zadatakServis.inicijaliziraj();
  }

  snimi() {
    if (this.zadatakServis.polja.valid) {
      if (!this.zadatakServis.polja.get('$id').value) {
        this.zadatakServis.snimiZadatak(this.zadatakServis.polja.value);
        this.obavijest.uspjesno('Zadatak snimljen u bazu!');
      } else {
              this.zadatakServis.updateZadatak(this.zadatakServis.polja.value);
              this.zadatakServis.polja.reset();
              this.zadatakServis.inicijaliziraj();
              this.obavijest.uspjesno('Zadatak snimljen u bazu!');
              this.zatvoriFormu();
      }
    }
  }

  zatvoriFormu() {
    this.zadatakServis.polja.reset();
    this.zadatakServis.inicijaliziraj();
    this.dialogRef.close();
  }

}
