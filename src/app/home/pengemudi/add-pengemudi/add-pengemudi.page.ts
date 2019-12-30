import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pengemudi',
  templateUrl: './add-pengemudi.page.html',
  styleUrls: ['./add-pengemudi.page.scss'],
})
export class AddPengemudiPage implements OnInit {

  form: FormGroup;

  constructor(
    private apiService: ApiServiceService,
    public loadingController: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      sim: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      nama: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      telp: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(12)]
      })
    });
  }

  addPengemudi() {
    if (!this.form.valid) {
      return;
    }

    this.loadingController.create({
      message: 'Menambah pengemudi...'
    }).then(loadingEl => {
      loadingEl.present();
      this.apiService.tambahPengemudi(
        this.form.value.sim,
        this.form.value.nama,
        this.form.value.telp
      ).subscribe((dataPengendara) => {
        console.log(dataPengendara);
        loadingEl.dismiss();
        this.form.reset();
        this.router.navigate(['/home/pengemudi']);
      });
    });
  }

}
