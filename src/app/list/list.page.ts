import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;

  manifestForm: FormGroup;

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

  listManifest: any = [];

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
    private service: ApiServiceService,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder
  ) {
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
    this.manifestForm = this.formBuilder.group({
      nomorManifest: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      idPenghasil: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      kodeLimbah: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      idKemasan: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      jumlahPesanan: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      satuan: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      idUnit: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      idTujuan: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      driver: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      plat: new FormControl('', {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      tanggal: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
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

  simpanData() {
    if (!this.manifestForm.valid) {
      return;
    }

    this.listManifest = [
      this.manifestForm.value.nomorManifest,
      this.manifestForm.value.idPenghasil,
      this.manifestForm.value.kodeLimbah,
      this.manifestForm.value.idKemasan,
      this.manifestForm.value.jumlahPesanan,
      this.manifestForm.value.satuan,
      this.manifestForm.value.idUnit,
      this.manifestForm.value.idTujuan,
      this.manifestForm.value.driver,
      this.manifestForm.value.plat,
      this.manifestForm.value.tanggal,

    ];

    console.log(this.listManifest);
  }

  onPenghasilSelected(event) {
    
    this.manifestForm.value.idPenghasil = event.detail.value;
    this.idPenghasilSelected = this.manifestForm.value.idPenghasil;
    console.log('selected Penghasil ID: ' + this.idPenghasilSelected);
  }

  

  onLimbahSelected(event) {
    
    this.manifestForm.value.kodeLimbah = event.detail.value;
    this.kodeLimbahSelected = this.manifestForm.value.kodeLimbah;
    console.log('selected Kode Limbah: ' + this.kodeLimbahSelected);
  }

  onKemasanSelected(event) {
    
    this.manifestForm.value.idKemasan = event.detail.value;
    this.idKemasanSelected = this.manifestForm.value.idKemasan;
    console.log('selected Kemasan ID: ' + this.idKemasanSelected);
  }

  onUnitSelected(event) {
    
    this.manifestForm.value.idUnit = event.detail.value;
    this.idUnitSelected = this.manifestForm.value.idUnit;
    console.log('selected Unit ID: ' + this.idUnitSelected);
  }

  onTujuanSelected(event) {
    
    this.manifestForm.value.idTujuan = event.detail.value;
    this.idTujuanSelected = this.manifestForm.value.idTujuan;
    console.log('selected Tujuan ID: ' + this.idTujuanSelected);
  }

  onDriverSelected(event) {

    this.manifestForm.value.driver = event.detail.value;
    this.idDriverSelected = this.manifestForm.value.driver;
    console.log('selected Driver SIM: ' + this.idDriverSelected);
  }

  onPlatSelected(event) {
    console.log(event.detail.value);
    this.manifestForm.value.plat = event.detail.value;
    this.nomorPlatSelected = this.manifestForm.value.plat;
    console.log('selected Plat Nomor: ' + this.nomorPlatSelected);
  }
}
