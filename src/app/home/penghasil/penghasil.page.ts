import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

declare var google;

@Component({
  selector: 'app-penghasil',
  templateUrl: './penghasil.page.html',
  styleUrls: ['./penghasil.page.scss'],
})
export class PenghasilPage implements OnInit {

  map;
  @ViewChild('mapElement', {static : true}) mapElement;
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      nama: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      lokasi: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });

    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      {
        center: {lat: -6.2399482, lng: 106.7911178},
        zoom: 8
      }
    );
  }

  addPenghasil() {}

}
