import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPengemudiPageRoutingModule } from './add-pengemudi-routing.module';

import { AddPengemudiPage } from './add-pengemudi.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AddPengemudiPageRoutingModule
  ],
  declarations: [AddPengemudiPage]
})
export class AddPengemudiPageModule {}
