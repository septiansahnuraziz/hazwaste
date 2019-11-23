import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KendaraanPageRoutingModule } from './kendaraan-routing.module';

import { KendaraanPage } from './kendaraan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KendaraanPageRoutingModule
  ],
  declarations: [KendaraanPage]
})
export class KendaraanPageModule {}
