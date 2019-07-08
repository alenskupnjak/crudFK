import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({providedIn: 'root'})

export class ZadaciService {

  constructor( private firebase: AngularFireDatabase) { }

  listaZadataka: AngularFireList<any>;

  polja: FormGroup = new FormGroup({
    $id: new FormControl(null),
    imeZadatka: new FormControl ('', Validators.required),
    opisZadatka: new FormControl ('', [Validators.required, Validators.minLength(10)]),
    zadatakKreiran: new FormControl ('', Validators.required),
    vrijeme: new FormControl(''),
  });


  inicijaliziraj() {
    this.polja.setValue({
      $id: null,
      imeZadatka: '',
      opisZadatka: '',
      zadatakKreiran: '',
      vrijeme: ''
    });
  }

  dohvatiSveZadatke() {
    this.listaZadataka = this.firebase.list('listaZadataka');
    return this.listaZadataka.snapshotChanges();
  }

  snimiZadatak(zadatak) {
    this.listaZadataka.push({
      imeZadatka: zadatak.imeZadatka,
      opisZadatka: zadatak.opisZadatka,
      zadatakKreiran: zadatak.zadatakKreiran,
      vrijeme: zadatak.vrijeme
    });
  }


}
