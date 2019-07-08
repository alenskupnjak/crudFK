import { Component, OnInit } from '@angular/core';
import { ZadaciService } from 'src/app/servis/zadaci.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-lista-zadataka',
  templateUrl: './lista-zadataka.component.html',
  styleUrls: ['./lista-zadataka.component.scss']
})
export class ListaZadatakaComponent implements OnInit {

  constructor(private servis: ZadaciService) { }

  listaZadataka: MatTableDataSource<any>;
  ispisaneKolone: string[] = ['imeZadatka', 'opisZadatka', 'zadatakKreiran', 'vrijeme', 'akcija'];

  ngOnInit() {
    this.servis.dohvatiSveZadatke().subscribe(
      data => {
        let podaci = data.map( podatak => {
          return {
            $id: podatak.key,
            ...podatak.payload.val()
          };
        });
        this.listaZadataka = new MatTableDataSource(podaci);
        console.log(this.listaZadataka);

      });
  }

}
