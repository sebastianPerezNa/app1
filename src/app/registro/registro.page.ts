import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  nombre: string = '';
  apellido: string = '';
  usuario: string = '';
  contrasena: string = '';
  correo: string = '';
  selectedRegion: number = 0;
  regions: any[] = [];
  comunas: any[] = [];
  selectedComuna: any = null; // Agregamos un arreglo para almacenar las comunas

  constructor(
    private router: Router,
    private alertController: AlertController,
    private storage: Storage,
    private http: HttpClient,

  ) {
    this.selectedComuna = null;
  }

  ngOnInit() {
    this.getRegiones();
    this.getComunas(); // Cargamos las comunas
  }

  getRegiones() {
    this.http.get('https://dev.matiivilla.cl/duoc/location/region').subscribe(
      (data: any) => {
        if (data && data.data && data.data.length > 0) {
          this.regions = data.data;
          this.selectedRegion = this.regions[0].id;
        }
      },
      (error) => {
        console.error('Error al obtener las regiones:', error);
      }
    );
  }

  getComunas() {
    this.http.get('https://dev.matiivilla.cl/duoc/location/comuna/7').subscribe(
      (data: any) => {
        if (data && data.data && data.data.length > 0) {
          this.comunas = data.data;
        }
      },
      (error) => {
        console.error('Error al obtener las comunas:', error);
      }
    );
  }


  registro() {
    if (this.usuario && this.contrasena) {
      const datosRegistro = {
        usuario: this.usuario,
        contrasena: this.contrasena,
        region: this.selectedRegion,
      };

      this.storage.set('datosRegistro', JSON.stringify(datosRegistro)).then(() => {
        this.presentAlert('Su registro ha sido exitoso. Puede iniciar sesión ahora.');
        this.router.navigate(['/login']);
      });
    } else {
      this.presentAlert('Por favor, complete todos los campos.');
    }
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Registro exitoso',
      message: message,
      buttons: ['Cerrar'],
    });

    await alert.present();
  }
}
