import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddIzinPage } from './add-izin.page';

const routes: Routes = [
  {
    path: '',
    component: AddIzinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddIzinPageRoutingModule {}
