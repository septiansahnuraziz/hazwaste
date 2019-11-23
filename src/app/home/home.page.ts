import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
  ) {}

  gotoKendaraan() {
    this.router.navigate(['/home/kendaraan']);
  }

  gotoPengemudi() {
    this.router.navigate(['/home/pengemudi']);
  }

  goIzin() {
    this.router.navigate(['/home/izin']);
  }

}
