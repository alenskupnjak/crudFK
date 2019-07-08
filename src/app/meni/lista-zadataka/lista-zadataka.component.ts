import { Component, OnInit, ViewChild } from '@angular/core';
import { ZadaciService } from 'src/app/servis/zadaci.service';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-lista-zadataka',
  templateUrl: './lista-zadataka.component.html',
  styleUrls: ['./lista-zadataka.component.scss']
})
export class ListaZadatakaComponent implements OnInit {

  constructor(private servis: ZadaciService) { }

  listaZadataka: MatTableDataSource<any>;
  ispisaneKolone: string[] = ['imeZadatka', 'opisZadatka', 'zadatakKreiran', 'vrijeme', 'akcija'];
  @ViewChild(MatSort) sort: MatSort;

  ucitano = true;

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
        this.listaZadataka.sort = this.sort;
        this.ucitano = false;
      });
  }

}
