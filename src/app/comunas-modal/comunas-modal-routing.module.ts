import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComunasModalPage } from './comunas-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ComunasModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComunasModalPageRoutingModule {}
