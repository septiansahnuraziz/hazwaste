import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPengemudiPageRoutingModule } from './add-pengemudi-routing.module';

import { AddPengemudiPage } from './add-pengemudi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPengemudiPageRoutingModule
  ],
  declarations: [AddPengemudiPage]
})
export class AddPengemudiPageModule {}
