import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComunasModalPageRoutingModule } from './comunas-modal-routing.module';

import { ComunasModalPage } from './comunas-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComunasModalPageRoutingModule
  ],
  declarations: [ComunasModalPage]
})
export class ComunasModalPageModule {}
