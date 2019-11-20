import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddKendaraanPageRoutingModule } from './add-kendaraan-routing.module';

import { AddKendaraanPage } from './add-kendaraan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddKendaraanPageRoutingModule
  ],
  declarations: [AddKendaraanPage]
})
export class AddKendaraanPageModule {}
