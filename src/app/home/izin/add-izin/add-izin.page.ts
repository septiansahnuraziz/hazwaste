import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ApiServiceService } from './../../../service/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-izin',
  templateUrl: './add-izin.page.html',
  styleUrls: ['./add-izin.page.scss'],
})
export class AddIzinPage implements OnInit {
  
  form: FormGroup;

  constructor(
    private apiService: ApiServiceService,
    public loadingController: LoadingController,
    private router: Router

  ) { }

  ngOnInit() {

    this.form = new FormGroup({
      no_ijin: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      berlaku_mulai: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      berlaku_sampai: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }

  addIzin(){
    if (!this.form.valid) {
      return;
    }

    this.loadingController.create({
      message: 'Menambahkan Perizin'
    }).then(loadingEl => {
      loadingEl.present();
      this.apiService.tambahPerizinan(
        this.form.value.no_ijin,
        new Date (this.form.value.berlaku_mulai),
        new Date (this.form.value.berlaku_sampai)
      ).subscribe((dataPerizinan)  => {
        console.log(dataPerizinan);
        loadingEl.dismiss();
        this.form.reset();
        this.router.navigate(['home/izin']);
      });
    });
  }

}
