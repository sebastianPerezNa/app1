import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { NavController } from '@ionic/angular';

const { BarcodeScanner } = Plugins;

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage {

  constructor(private navCtrl: NavController) { }

  async escanearQR() {
    const result = await BarcodeScanner['startScan']();

    if (result.hasContent) {
      // Obtener la información del escaneo
      const scannedValue = result.content;

      // Redirigir al usuario a la página "clase-registrada" con la información
      this.navCtrl.navigateForward('/clase-registrada', {
        queryParams: {
          hora: 'Hora del escaneo',
          nombreProfesor: 'Iturra',
          sala: 'Sala'
        }
      });
    } else {
      // Manejar el caso en el que no se escaneó un código QR válido
      // Puedes mostrar una alerta aquí si es necesario
    }
  }
}
