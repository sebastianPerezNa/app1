import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { NavController } from '@ionic/angular';
import * as QRCode from 'qrcode-generator';

const { BarcodeScanner } = Plugins;

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
  qrData: string = '';
  qrCodeImage: string = '';
  qrDataGenerated: boolean = false;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  generateQRCode() {
    const profesor = 'Juan Perez';
    const sala = '805';
    const fechaHora = new Date().toLocaleString();

    this.qrData = `Profesor: ${profesor}, Sala: ${sala}, Fecha y Hora: ${fechaHora}`;

    const typeNumber = 4;
    const errorCorrectionLevel = 'L';

    const qr = QRCode(typeNumber, errorCorrectionLevel);
    qr.addData(this.qrData);
    qr.make();

    this.qrCodeImage = qr.createDataURL(10, 0);
    this.qrDataGenerated = true;
  }

  async scanQRCode() {
    try {
      const barcodeData = await BarcodeScanner['scan']();

      if (!barcodeData.cancelled) {
        this.qrData = barcodeData.text;
        this.qrDataGenerated = true;
      }
    } catch (error) {
      console.error(error);
    }
  }

  volverALogin() {
    this.navCtrl.navigateBack('/login');
  }
}
