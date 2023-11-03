import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-clase-registrada',
  templateUrl: './clase-registrada.page.html',
  styleUrls: ['./clase-registrada.page.scss'],
})
export class ClaseRegistradaPage implements OnInit {
  horaActual: string = '';
  usuarioRegistrado: string | null = null;
  latitud: number | null = null;
  longitud: number | null = null;

  constructor(private platform: Platform, private activatedRoute: ActivatedRoute) {
    this.horaActual = new Date().toLocaleTimeString();

    this.platform.ready().then(() => {
      this.obtenerLatitudLongitud();
    });

    // Obtener el usuario de los parámetros de la URL
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params && params['usuario']) {
        this.usuarioRegistrado = params['usuario'];
      }
    });
  }

  ngOnInit() {}

  obtenerLatitudLongitud() {
    // Simulamos la obtención de latitud y longitud de una API (en este caso, valores aleatorios)
    this.latitud = this.getRandomCoordinate(-90, 90, 6);
    this.longitud = this.getRandomCoordinate(-180, 180, 6);
  }

  getRandomCoordinate(min: number, max: number, decimalPlaces: number): number {
    const factor = Math.pow(10, decimalPlaces);
    return (
      (Math.random() * (max * factor - min * factor) + min * factor) / factor
    );
  }

  async seleccionarFotoAlumno() {
    if (Capacitor.isPluginAvailable('Camera')) {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.DataUrl,
      });

      // Obtén la URL de la imagen seleccionada
      const imageUrl = image.dataUrl;

      // Verifica si la URL de la imagen no es undefined antes de asignarla
      if (imageUrl !== undefined) {
        const imageElement = document.getElementById('imagen-alumno') as HTMLImageElement;
        imageElement.src = imageUrl;
      } else {
        // Manejar el caso en el que imageUrl es undefined
      }
    } else {
      // Manejar la situación en la que el plugin Camera no está disponible en el dispositivo.
    }
  }

  async tomarSelfie() {
    if (Capacitor.isPluginAvailable('Camera')) {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        source: CameraSource.Camera, // Utiliza la cámara del dispositivo
        resultType: CameraResultType.DataUrl,
      });

      // Obtén la URL de la imagen capturada
      const imageUrl = image.dataUrl;

      // Verifica si la URL de la imagen no es undefined antes de asignarla
      if (imageUrl !== undefined) {
        const imageElement = document.getElementById('imagen-selfie') as HTMLImageElement;
        imageElement.src = imageUrl;
      } else {
        // Manejar el caso en el que imageUrl es undefined
      }
    } else {
      // Manejar la situación en la que el plugin Camera no está disponible en el dispositivo.
    }
  }

}
