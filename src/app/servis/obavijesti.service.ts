import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material';

@Injectable({providedIn: 'root'})


export class ObavijestiService {


  constructor(public snackBar: MatSnackBar) { }


  uspjesno(msg) {
  this.snackBar.open(msg, '', {duration: 2000});
  }
}
