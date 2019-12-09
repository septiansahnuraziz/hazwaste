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
    path: 'home/pengemudi/add-pengemudi',
    loadChildren: () => import('./home/pengemudi/add-pengemudi/add-pengemudi.module').then( m => m.AddPengemudiPageModule)
  },
  {
    path: 'home/izin/add-izin',
    loadChildren: () => import('./home/izin/add-izin/add-izin.module').then( m => m.AddIzinPageModule)
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
  },
  {
    path: 'home/pengemudi',
    loadChildren: () => import('./home/pengemudi/pengemudi.module').then( m => m.PengemudiPageModule)
  },
  {
    path: 'list/driver',
    loadChildren: () => import('./list/driver/driver.module').then( m => m.DriverPageModule)
  },
  {
    path: 'home/penghasil',
    loadChildren: () => import('./home/penghasil/penghasil.module').then( m => m.PenghasilPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
