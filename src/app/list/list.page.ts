import { ApiServiceService } from 'src/app/service/api-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;

  listPenghasil: any = [];
  listJenisLimbah: any = [];
  listKemasan: any = [];
  listUnit: any = [];
  listPengelola: any = [];
  listDriver: any = [];
  listKendaraan: any = [];

  idPenghasilSelected: any;
  idTujuanSelected: any;
  idKemasanSelected: any;
  idUnitSelected: any;
  kodeLimbahSelected: any;
  idDriverSelected: any;
  nomorPlatSelected: any;

  // private icons = [
  //   'flask',
  //   'wifi',
  //   'beer',
  //   'football',
  //   'basketball',
  //   'paper-plane',
  //   'american-football',
  //   'boat',
  //   'bluetooth',
  //   'build'
  // ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(
    private router: Router,
    private service: ApiServiceService
  ) {
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }

  ngOnInit() {
    this.service.getPenghasil().subscribe(pengemudi => {
      console.log(pengemudi);
      this.listPenghasil = pengemudi;
      
    });

    this.service.getJenisLimbah().subscribe(limbah => {
      console.log(limbah);
      this.listJenisLimbah  = limbah;
    });

    this.service.getKemasan().subscribe(kemasan => {
      console.log(kemasan);
      this.listKemasan = kemasan;
    });

    this.service.getUnit().subscribe(unit => {
      console.log(unit);
      this.listUnit = unit;
    });

    this.service.getPengelola().subscribe(pengelola => {
      console.log(pengelola);
      this.listPengelola = pengelola;
    });

    this.service.getPengemudi().subscribe(pengemudi => {
      console.log(pengemudi);
      this.listDriver = pengemudi;
    });

    this.service.getKendaraan().subscribe(plat => {
      console.log(plat);
      this.listKendaraan = plat;
    });
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  next() {
    this.router.navigate(['/list/driver']);
  }

  onPenghasilSelected() {
    console.log('selected Penghasil ID: ' + this.idPenghasilSelected);
  }

  onTujuanSelected() {
    console.log('selected Tujuan ID: ' + this.idTujuanSelected);
  }

  onLimbahSelected() {
    console.log('selected Kode Limbah: ' + this.kodeLimbahSelected);
  }

  onKemasanSelected() {
    console.log('selected Kemasan ID: ' + this.idKemasanSelected);
  }

  onUnitSelected() {
    console.log('selected Unit ID: ' + this.idUnitSelected);
  }

  onDriverSelected() {
    console.log('selected Unit ID: ' + this.idDriverSelected);
  }

  onPlatSelected() {
    console.log('selected Plat Nomor: ' + this.nomorPlatSelected);
  }
}
