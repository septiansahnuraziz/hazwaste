import { ApiServiceService } from './../service/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-kendaraan',
  templateUrl: './add-kendaraan.page.html',
  styleUrls: ['./add-kendaraan.page.scss'],
})
export class AddKendaraanPage implements OnInit {

  data: any;

  constructor(
    private apiService: ApiServiceService,

  ) {}

  ngOnInit() {
    this.data = 'komeng';
  }

  addKendaraan() {

  }

}
