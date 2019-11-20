import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPengemudiPage } from './add-pengemudi.page';

const routes: Routes = [
  {
    path: '',
    component: AddPengemudiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPengemudiPageRoutingModule {}
