import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();

    // Crea la base de datos antes de que la aplicación se inicie
    await this.storage.create();

    // Otras inicializaciones si es necesario

  }
}
