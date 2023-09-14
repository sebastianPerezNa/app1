import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage {
  correo: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  async recuperarContrasena() {
    // Aquí puedes agregar la lógica para enviar la solicitud de recuperación de contraseña,
    // por ejemplo, enviar una solicitud al servidor.

    // Después de enviar la solicitud con éxito, muestra un mensaje emergente.
    const alert = await this.alertController.create({
      header: 'Correo Enviado',
      message: 'Se ha enviado un correo electrónico con instrucciones para restablecer tu contraseña.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}

