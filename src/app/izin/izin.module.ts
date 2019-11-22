import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IzinPageRoutingModule } from './izin-routing.module';

import { IzinPage } from './izin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IzinPageRoutingModule
  ],
  declarations: [IzinPage]
})
export class IzinPageModule {}
