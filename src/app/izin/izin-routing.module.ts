import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IzinPage } from './izin.page';

const routes: Routes = [
  {
    path: '',
    component: IzinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IzinPageRoutingModule {}
