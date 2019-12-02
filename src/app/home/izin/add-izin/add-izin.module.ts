import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddIzinPageRoutingModule } from './add-izin-routing.module';

import { AddIzinPage } from './add-izin.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AddIzinPageRoutingModule
  ],
  declarations: [AddIzinPage]
})
export class AddIzinPageModule {}
