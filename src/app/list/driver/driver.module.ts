import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverPageRoutingModule } from './driver-routing.module';

import { DriverPage } from './driver.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    DriverPageRoutingModule
  ],
  declarations: [DriverPage]
})
export class DriverPageModule {}
