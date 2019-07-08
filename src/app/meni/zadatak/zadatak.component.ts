import { Component, OnInit } from '@angular/core';
import { ZadaciService } from '../../servis/zadaci.service';

@Component({
  selector: 'app-zadatak',
  templateUrl: './zadatak.component.html',
  styleUrls: ['./zadatak.component.scss']
})
export class ZadatakComponent implements OnInit {

  constructor(public zadatakServis: ZadaciService) { }

  ngOnInit() {
  }

}
