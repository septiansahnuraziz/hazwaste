import { Pengemudi } from './../../service/pengemudi.model';
import { ApiServiceService } from './../../service/api-service.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Driver } from 'selenium-webdriver/chrome';

@Component({
  selector: 'app-pengemudi',
  templateUrl: './pengemudi.page.html',
  styleUrls: ['./pengemudi.page.scss'],
})
export class PengemudiPage implements OnInit {

  driverSub: Subscription;
  loadedDrivers: Pengemudi[];
  isLoading = false;

  constructor(
    private apiService: ApiServiceService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.driverSub = this.apiService.drivers.subscribe(pengemudi => {
      this.loadedDrivers = pengemudi;
      console.log(pengemudi);
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.apiService.fetchPengemudi().subscribe((data) => {
      console.log(data);
      this.isLoading = false;
    });
   }

  addPengemudi() {
    this.router.navigate(['home/pengemudi/add-pengemudi']);
  }

  goToKendaraan() {
    this.router.navigate(['home']);
  }

}
