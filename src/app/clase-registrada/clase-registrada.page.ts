import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { Storage } from '@ionic/storage';

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

  constructor(private platform: Platform, private activatedRoute: ActivatedRoute, private storage: Storage) {
    this.horaActual = new Date().toLocaleTimeString();

    this.platform.ready().then(() => {
      this.obtenerLatitudLongitud();
    });

    // Obtener el usuario registrado del almacenamiento local
    this.storage.get('datosRegistro').then((storedUserJSON) => {
      if (storedUserJSON) {
        const storedUser = JSON.parse(storedUserJSON);
        this.usuarioRegistrado = storedUser.usuario; // Asumo que el nombre de usuario se encuentra en "usuario"
      }
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

  // Resto de tus funciones y métodos

  async seleccionarFotoAlumno() {
    // Implementa la lógica de selección de foto del alumno
  }

  async tomarSelfie() {
    // Implementa la lógica para tomar una selfie
  }
}
