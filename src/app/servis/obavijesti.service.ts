import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Injectable({providedIn: 'root'})


export class ObavijestiService {


  constructor(public snackBar: MatSnackBar) { }




  uspjesno(msg) {
  this.snackBar.open(msg,'');
  }
}
