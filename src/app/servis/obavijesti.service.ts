import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material";

@Injectable({ providedIn: "root" })
export class ObavijestiService {
  config: MatSnackBarConfig = {
    duration: 2000,
    verticalPosition: "top",
  };

  constructor(public snackBar: MatSnackBar) {}

  uspjesno(msg) {
    this.config["panelClass"] = ["obavijest", "uspjesno"];
    this.snackBar.open(msg, "", this.config);
  }

  upozorenje(msg) {
    this.config["panelClass"] = ["obavijest", "upozorenje"];
    this.snackBar.open(msg, "", this.config);
  }
}
