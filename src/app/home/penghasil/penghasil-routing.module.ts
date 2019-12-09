import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PenghasilPage } from './penghasil.page';

const routes: Routes = [
  {
    path: '',
    component: PenghasilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PenghasilPageRoutingModule {}
