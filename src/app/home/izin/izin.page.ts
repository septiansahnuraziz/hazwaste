import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-izin',
  templateUrl: './izin.page.html',
  styleUrls: ['./izin.page.scss'],
})
export class IzinPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goAddIzin() {
    this.router.navigate(['/home/izin/add-izin'])
  }

}
