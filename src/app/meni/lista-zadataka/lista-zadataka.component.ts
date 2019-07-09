import { Component, OnInit, ViewChild } from '@angular/core';
import { ZadaciService } from 'src/app/servis/zadaci.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ZadatakComponent } from '../zadatak/zadatak.component';
import { ObavijestiService } from 'src/app/servis/obavijesti.service';

@Component({
  selector: 'app-lista-zadataka',
  templateUrl: './lista-zadataka.component.html',
  styleUrls: ['./lista-zadataka.component.scss']
})
export class ListaZadatakaComponent implements OnInit {

  constructor(
    private servis: ZadaciService,
    private dialog: MatDialog,
    public obavijest: ObavijestiService
    ) { }

  listaZadataka: MatTableDataSource<any>;
  ispisaneKolone: string[] = ['imeZadatka', 'opisZadatka', 'zadatakKreiran', 'vrijeme', 'akcija'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  nadiZapis: string;
  ucitano = true;
  brojZadataka = false;
  listOznacenih = [];

  ngOnInit() {
    this.servis.dohvatiSveZadatke().subscribe(
      data => {
        let podaci = data.map( podatak => {
          return {
            $id: podatak.key,
            ...podatak.payload.val()
          };
        });
        if ( podaci.length > 6) { this.brojZadataka = true; }
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

  editirajZadatak(row) {
    this.servis.popuniFormu(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(ZadatakComponent, dialogConfig);
  }

  obrisi(id, event) {
   this.servis.obrisiZadatak(id);
    this.brojZadataka = false;
    if ( event.data.length > 5) { this.brojZadataka = true; }

  }

  obrisiViseZadataka() {
    if (this.listOznacenih.length == 0) { return; }
    if (confirm(`Are you sure you want to delete ${ this.listOznacenih.length } records?`)) {
      this.listOznacenih.forEach(data => {
        this.servis.obrisiViseZadataka(data);
       });
       this.obavijest.upozorenje(`${this.listOznacenih.length} zadatka obrisano!`);
    }
    this.brojZadataka = false;
    if ( (this.listaZadataka.data.length - this.listOznacenih.length) > 5) { this.brojZadataka = true; }
    this.listOznacenih = [];
  }



  sastaviListuOznacenih(id) {
    let nasoZadatak = -1;
    if (this.listOznacenih.length == 0) {
          this.listOznacenih.push(id);
          return
   }

    this.listOznacenih.forEach((data, index) => {
         if (data == id) {
           nasoZadatak = index;
           this.listOznacenih.splice(index, 1);
        }
    });

    if (nasoZadatak === -1) { this.listOznacenih.push(id); }
    console.log(this.listOznacenih);
  }

}
