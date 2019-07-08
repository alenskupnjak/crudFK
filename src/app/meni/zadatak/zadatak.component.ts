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
    public obavijest: ObavijestiService
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
    console.log(this.zadatakServis.polja.valid);
    console.log(this.zadatakServis.polja.value);

    if (this.zadatakServis.polja.valid) {
      this.zadatakServis.snimiZadatak(this.zadatakServis.polja.value);
      this.zadatakServis.polja.reset();
      this.zadatakServis.inicijaliziraj();
      this.obavijest.uspjesno('Zadatak snimljen!');
    }

  }

}
