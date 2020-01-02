import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.page.html',
  styleUrls: ['./driver.page.scss'],
})
export class DriverPage implements OnInit {

  manifestDriverForm: FormGroup;

  idDriverSelected: any;
  nomorPlatSelected: any;

  listDriver: any = [];
  listKendaraan: any = [];

  listManifestDriver: any = [];

  constructor(
    private router: Router,
    private service: ApiServiceService,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private navCtrl: NavController
  ) {
    this.manifestDriverForm = this.formBuilder.group({
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
    this.service.getAvailableVehicle().subscribe(kendaraan => {
      console.log(kendaraan);
      this.listKendaraan = kendaraan;
    });
    this.service.getAvailableDriver().subscribe(driver => {
      console.log(driver);
      this.listDriver = driver;
    });
  }

  onDriverSelected(event) {

    this.manifestDriverForm.value.driver = event.detail.value;
    this.idDriverSelected = this.manifestDriverForm.value.driver;
    console.log('selected Driver SIM: ' + this.idDriverSelected);
  }

  onPlatSelected(event) {

    this.manifestDriverForm.value.plat = event.detail.value;
    this.nomorPlatSelected = this.manifestDriverForm.value.plat;
    console.log('selected Plat Nomor: ' + this.nomorPlatSelected);
  }

  simpanPerjalanan() {
    if (!this.manifestDriverForm.valid) {
      return;
    }

    this.manifestDriverForm.value.tanggal = new Date().toLocaleString();

    this.loadingController.create({
      message: 'Menambah perjalanan...'
    }).then((loadingEL) => {
      loadingEL.present();
      this.service.tambahPerjalanan(
        this.manifestDriverForm.value.plat,
        this.idDriverSelected,
        1,
        this.manifestDriverForm.value.tanggal
      ).subscribe((dataPerjalanan) => {
        console.log(dataPerjalanan);
        console.log(dataPerjalanan['data']);
        this.service.getActiveTransport(this.manifestDriverForm.value.plat)
        .subscribe((dataTransport) => {
          console.log(dataTransport[0].id);
          this.service.updateLastManifest(
            dataTransport[0].id,
            this.manifestDriverForm.value.tanggal
          ).subscribe((dataUpdateManifest) => {
            console.log(dataUpdateManifest);
            loadingEL.dismiss();
            this.manifestDriverForm.reset();
            this.navCtrl.navigateRoot(['/tracking']);
          });
        });
        
      });
    });
  }

}
