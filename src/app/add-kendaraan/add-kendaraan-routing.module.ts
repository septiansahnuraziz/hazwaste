import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddKendaraanPage } from './add-kendaraan.page';

const routes: Routes = [
  {
    path: '',
    component: AddKendaraanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddKendaraanPageRoutingModule {}
