import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { DatePipe } from '@angular/common';

@Injectable({providedIn: 'root'})

export class ZadaciService {

  constructor(
    private firebase: AngularFireDatabase,
    private datePipe: DatePipe
                 ) { }

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
      zadatakKreiran: zadatak.zadatakKreiran == '' ? '' : this.datePipe.transform(zadatak.zadatakKreiran, 'yyyy-MM-dd'),
      vrijeme: zadatak.vrijeme
    });
  }
  popuniFormu(zadatak) {
    this.polja.setValue(zadatak);
  }

  updateZadatak(zadatak) {
    this.listaZadataka.update(zadatak.$id,
      {
        imeZadatka: zadatak.imeZadatka,
        opisZadatka: zadatak.opisZadatka,
        zadatakKreiran: zadatak.zadatakKreiran,
        vrijeme: zadatak.vrijeme
      });
  }

  obrisiZadatak( $id: string) {
    this.listaZadataka.remove($id);
  }


}
