import { Kendaraan } from '../../service/kendaraan.model';
import { ApiServiceService } from '../../service/api-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-kendaraan',
  templateUrl: './kendaraan.page.html',
  styleUrls: ['./kendaraan.page.scss'],
})
export class KendaraanPage implements OnInit {

  private vehicleSub: Subscription;
  loadedVehicles: Kendaraan[];
  isLoading = false;

  constructor(
    private apiService: ApiServiceService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.vehicleSub = this.apiService.vehicles.subscribe(kendaraan => {
      this.loadedVehicles = kendaraan;
      console.log(kendaraan);
    });
  }

  ionViewWillEnter() {
   this.isLoading = true;
   this.apiService.fetchKendaraan().subscribe((data) => {
     console.log(data);
     this.isLoading = false;
   });
  }

  addKendaraan() {
    this.router.navigate(['home/kendaraan/add-kendaraan']);
    console.log("klik");
  }
}
