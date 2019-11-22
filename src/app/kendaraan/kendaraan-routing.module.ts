import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KendaraanPage } from './kendaraan.page';

const routes: Routes = [
  {
    path: '',
    component: KendaraanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KendaraanPageRoutingModule {}
