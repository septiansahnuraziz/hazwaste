import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PengemudiPage } from './pengemudi.page';

const routes: Routes = [
  {
    path: '',
    component: PengemudiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PengemudiPageRoutingModule {}
