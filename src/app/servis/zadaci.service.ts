import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({providedIn: 'root'})

export class ZadaciService {

  constructor() { }

  polja: FormGroup = new FormGroup({
    $id: new FormControl(null),
    imeZadatka: new FormControl (''),
    opisZadatka: new FormControl (''),
    zadatakKreiran: new FormControl ('')
  });
}
