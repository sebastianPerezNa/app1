import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise<boolean>((resolve) => {
      this.storage.get('datosRegistro').then((datosRegistro) => {
        if (datosRegistro) {
          // Usuario autenticado, permite el acceso a la página protegida
          resolve(true);
        } else {
          // Usuario no autenticado, redirige al inicio de sesión
          this.router.navigate(['/login']);
          resolve(false);
        }
      });
    });
  }
}
