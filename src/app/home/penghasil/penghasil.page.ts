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
        center: {lat: -6.2285507, lng: 106.7889774},
        zoom: 8
      }
    );

    // const infoWindow = new google.maps.InfoWindow();
    const pos = {
      lat: -6.2285507,
      lng: 106.7889774
    };

    /*console.log(infoWindow);
    console.log(this.map);

    infoWindow.setPosition(pos);
    // infoWindow.setContent('Location found.');
    infoWindow.open(this.map);*/
    const infoWindow = new google.maps.InfoWindow();

    this.map.setCenter(pos);

    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      title: 'Your location'
    });

    marker.addListener('click', function() {
      infoWindow.open(this.map, marker);
    });
  }

  addPenghasil() {}

}
