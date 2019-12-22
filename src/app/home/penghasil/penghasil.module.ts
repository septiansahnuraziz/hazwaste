import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PenghasilPageRoutingModule } from './penghasil-routing.module';

import { PenghasilPage } from './penghasil.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    PenghasilPageRoutingModule
  ],
  declarations: [PenghasilPage],
  providers: [Geolocation]
})
export class PenghasilPageModule {}
