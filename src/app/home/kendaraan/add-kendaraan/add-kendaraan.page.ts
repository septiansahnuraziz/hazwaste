import { ApiServiceService } from './../../../service/api-service.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-add-kendaraan',
  templateUrl: './add-kendaraan.page.html',
  styleUrls: ['./add-kendaraan.page.scss'],
})
export class AddKendaraanPage implements OnInit {


  form: FormGroup;

  constructor(
    private apiService: ApiServiceService,
    public loadingController: LoadingController,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      plat: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      jenis: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(12)]
      }),
      // kapasitas: new FormControl(null, {
      //   updateOn: 'blur',
      //   validators: [Validators.required]
      // }),
      noBapedal: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }

  addKendaraan() {
    if (!this.form.valid) {
      return;
    }

    this.loadingController.create({
      message: 'Menambah kendaraan...'
    }).then(loadingEl => {
      loadingEl.present();
      this.apiService.tambahKendaraan(
          this.form.value.plat,
          this.form.value.jenis,
          this.form.value.noBapedal
        ).subscribe((dataKendaraan) => {
        console.log(dataKendaraan);
        loadingEl.dismiss();
        this.form.reset();
        this.router.navigate(['/home/kendaraan']);
      });
    });
  }

}
