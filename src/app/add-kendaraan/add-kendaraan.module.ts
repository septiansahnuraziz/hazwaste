import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddKendaraanPageRoutingModule } from './add-kendaraan-routing.module';

import { AddKendaraanPage } from './add-kendaraan.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AddKendaraanPageRoutingModule
  ],
  declarations: [AddKendaraanPage]
})
export class AddKendaraanPageModule {}
