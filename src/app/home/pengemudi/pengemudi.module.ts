import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PengemudiPageRoutingModule } from './pengemudi-routing.module';

import { PengemudiPage } from './pengemudi.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PengemudiPageRoutingModule
  ],
  declarations: [PengemudiPage]
})
export class PengemudiPageModule {}
