import { ApiServiceService } from './../service/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-kendaraan',
  templateUrl: './add-kendaraan.page.html',
  styleUrls: ['./add-kendaraan.page.scss'],
})
export class AddKendaraanPage implements OnInit {

  constructor(
    private apiService: ApiServiceService
  ) {}

  ngOnInit() {
    this.apiService.getKendaraan().subscribe(data => {
      console.log(data);
    });
  }

}
