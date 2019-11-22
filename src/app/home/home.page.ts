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

  addKendaraan() {
    this.router.navigate(['/add-kendaraan']);
  }
  public addPengemudi() {
    this.router.navigate(['/add-pengemudi']);
  }

  goIzin() {
    this.router.navigate(['/izin']);
  }

}
