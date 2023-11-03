import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegistroDataService {
  private datosRegistro: any;

  setDatosRegistro(datos: any) {
    this.datosRegistro = datos;
  }

  getDatosRegistro() {
    return this.datosRegistro;
  }
}
