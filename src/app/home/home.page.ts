import { ApiServiceService } from 'src/app/service/api-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(
    private router: Router,
    private apiService: ApiServiceService
  ) {}

  ngOnInit() {
  }

  gotoKendaraan() {
    this.router.navigate(['/home/kendaraan']);
  }

  gotoPengemudi() {
    this.router.navigate(['/home/pengemudi']);
  }

  goIzin() {
    this.router.navigate(['/home/izin/add-izin']);
  }

  goPenghasil() {
    this.router.navigate(['/home/penghasil']);
  }

}
