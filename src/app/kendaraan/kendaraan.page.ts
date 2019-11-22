import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kendaraan',
  templateUrl: './kendaraan.page.html',
  styleUrls: ['./kendaraan.page.scss'],
})
export class KendaraanPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
