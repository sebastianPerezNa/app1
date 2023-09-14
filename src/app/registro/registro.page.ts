import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

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

  constructor(
    private router: Router,
    private alertController: AlertController,
    private storage: Storage
  ) {}

  registro() {

    if (this.usuario && this.contrasena) {
      const datosRegistro = { usuario: this.usuario, contrasena: this.contrasena };


      this.storage.set('datosRegistro', JSON.stringify(datosRegistro)).then(() => {

        this.presentAlert('Su registro ha sido exitoso. Puede iniciar sesión ahora.');

        this.router.navigate(['/login']);
      });
    } else {
      this.presentAlert('Por favor, complete todos los campos.');
    }

    const nuevoUsuarioRegistrado = {
      nombre: this.nombre,
      apellido: this.apellido,
      usuario: this.usuario,
      contrasena: this.contrasena,
      correo: this.correo,
    };


    localStorage.setItem('usuarioRegistrado', JSON.stringify(nuevoUsuarioRegistrado));
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
