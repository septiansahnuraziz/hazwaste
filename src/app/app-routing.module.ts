import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'home/kendaraan/add-kendaraan',
    loadChildren: () => import('./home/kendaraan/add-kendaraan/add-kendaraan.module').then( m => m.AddKendaraanPageModule)
  },
  {
    path: 'home/add-pengemudi',
    loadChildren: () => import('./home/add-pengemudi/add-pengemudi.module').then( m => m.AddPengemudiPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tracking',
    loadChildren: () => import('./tracking/tracking.module').then( m => m.TrackingPageModule)
  },
  {
    path: 'home/kendaraan',
    loadChildren: () => import('./home/kendaraan/kendaraan.module').then( m => m.KendaraanPageModule)
  },
  {
    path: 'home/izin',
    loadChildren: () => import('./home/izin/izin.module').then( m => m.IzinPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
