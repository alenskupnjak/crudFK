import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({providedIn: 'root'})

export class ZadaciService {

  constructor() { }

  polja: FormGroup = new FormGroup({
    $id: new FormControl(null),
    imeZadatka: new FormControl ('', Validators.required),
    opisZadatka: new FormControl ('', [Validators.required, Validators.minLength(10)]),
    zadatakKreiran: new FormControl ('', Validators.required),
    vrijeme: new FormControl(''),
  });
}
