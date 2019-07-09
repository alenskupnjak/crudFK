import { Component, OnInit, ViewChild } from '@angular/core';
import { ZadaciService } from 'src/app/servis/zadaci.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ZadatakComponent } from '../zadatak/zadatak.component';

@Component({
  selector: 'app-lista-zadataka',
  templateUrl: './lista-zadataka.component.html',
  styleUrls: ['./lista-zadataka.component.scss']
})
export class ListaZadatakaComponent implements OnInit {

  constructor(
    private servis: ZadaciService,
    private dialog: MatDialog
    ) { }

  listaZadataka: MatTableDataSource<any>;
  ispisaneKolone: string[] = ['imeZadatka', 'opisZadatka', 'zadatakKreiran', 'vrijeme', 'akcija'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  nadiZapis: string;
  ucitano = true;
  brojZadataka = false;

  ngOnInit() {
    this.servis.dohvatiSveZadatke().subscribe(
      data => {
        let podaci = data.map( podatak => {
          return {
            $id: podatak.key,
            ...podatak.payload.val()
          };
        });
        if ( podaci.length > 5) { this.brojZadataka = true; }
        this.listaZadataka = new MatTableDataSource(podaci);
        this.listaZadataka.sort = this.sort;
        this.listaZadataka.paginator = this.paginator;
        this.ucitano = false;
      });
  }

  ocistiFilter() {
    this.nadiZapis = '';
    this.filtriraj();
  }

  filtriraj() {
    this.listaZadataka.filter = this.nadiZapis.trim().toLowerCase();
  }

  kreirajNoviZadatak() {
    this.servis.inicijaliziraj();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(ZadatakComponent, dialogConfig);
  }

}
