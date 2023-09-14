import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { QrPage } from './qr/qr.page';


const routes: Routes = [
  {
    path: 'login', // Cambiamos la ruta ' ' a 'login'
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'qr', // Ruta de la página protegida 'qr'
    canActivate: [AuthGuard], // Utiliza AuthGuard como canActivate
    loadChildren: () => import('./qr/qr.module').then(m => m.QrPageModule), // Importa el módulo de tu página protegida 'qr'
  },
  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./recuperar-contrasena/recuperar-contrasena.module').then( m => m.RecuperarContrasenaPageModule)
  },
  {
    path: '', // Ruta raíz, que redirige a 'login'
    redirectTo: 'login',
    pathMatch: 'full'
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
