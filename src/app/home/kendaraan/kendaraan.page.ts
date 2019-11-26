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

  vehicleSub: Subscription;
  loadedVehicles: Kendaraan[];
  isLoading = false;

  loadedKendaraan: any;

  constructor(
    private apiService: ApiServiceService,
    private router: Router,
  ) { }

  ngOnInit() {
    /*this.vehicleSub = this.apiService.vehicles.subscribe(kendaraan => {
      this.loadedVehicles = kendaraan;
      console.log(kendaraan);
    });*/

    this.apiService.getCobaKendaraan().subscribe(datanya => {
      console.log(datanya);
      this.loadedKendaraan = datanya;
    });
  }

  ionViewWillEnter() {
   this.isLoading = true;
   this.apiService.getCobaKendaraan().subscribe((data) => {
     console.log(data);
     this.isLoading = false;
   });
  }

  addKendaraan() {
    this.router.navigate(['home/kendaraan/add-kendaraan']);
    console.log("klik");
  }
}
