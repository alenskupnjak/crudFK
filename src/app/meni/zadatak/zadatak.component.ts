import { Component, OnInit } from '@angular/core';
import { ZadaciService } from '../../servis/zadaci.service';

@Component({
  selector: 'app-zadatak',
  templateUrl: './zadatak.component.html',
  styleUrls: ['./zadatak.component.scss']
})



export class ZadatakComponent implements OnInit {
  vrijemeUnosa: string;

  constructor(public zadatakServis: ZadaciService) { }
  date: Date;

  ngOnInit() {
  }


  onDataChange(newdate) {
    let date = new Date;
    let sati = date.getHours();
    let minute = date.getMinutes();
    let sekunde = date.getSeconds();
    this.vrijemeUnosa = sati + 'h-' + minute + 'min-' + sekunde + 'sec';
  }

}
