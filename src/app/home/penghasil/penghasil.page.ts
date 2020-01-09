import { ApiServiceService } from 'src/app/service/api-service.service';
import { LoadingController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;

@Component({
  selector: 'app-penghasil',
  templateUrl: './penghasil.page.html',
  styleUrls: ['./penghasil.page.scss'],
})
export class PenghasilPage implements OnInit, AfterViewInit {



  namaAlamat: any;

  lat: any;
  long: any;

  latPenghasil: any;
  longPenghasil: any;

  map;
  @ViewChild('mapElement', {static : true}) mapElement;
  @ViewChild('autoCompleteInput', {static : true}) inputNativeElement;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loadingCtrl: LoadingController,
    private apiService: ApiServiceService,
    private geolocation: Geolocation
  ) {
    this.createDirectionForm();
  }


  createDirectionForm() {
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
  }

  ngAfterViewInit(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      // console.log(resp.coords.latitude);
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
      this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        {
          center: {lat: this.lat, lng: this.long},
          zoom: 15
        }
      );

      console.log(resp);

      const pos = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };

      this.map.setCenter(pos);

      const icon = {
        url: 'assets/icon/iconGPS.png',
        scaledSize: new google.maps.Size(50, 50),
      };

      const marker = new google.maps.Marker({
        position: pos,
        map: this.map,
        title: 'Your location',
        icon: icon,
        anchorPoint: new google.maps.Point(0, 10)
      });

      const infoWindow = new google.maps.InfoWindow(
        {
        content: 'You are here',
        maxWidth: 400
      }
      );
      marker.addListener('click', function() {
        infoWindow.open(this.map, marker);
      });

      const infoWindowContent = document.getElementById('infowindow-content');

      const autocomplete = new google.maps.places.Autocomplete(this.inputNativeElement.nativeElement as HTMLInputElement);
      autocomplete.addListener('place_changed', () => {
        infoWindow.setContent(infoWindowContent);
        infoWindow.close();
        marker.setVisible(false);
        const place = autocomplete.getPlace();
        console.log(place.formatted_address);
        console.log(place.name);
        console.log(place);
        // this.form.value.nama = place.name;
        this.namaAlamat = place.formatted_address;

        
        if (!place.geometry) {
          window.alert('No details available for input: ' + place.name);
          return;
        }
        if (place.geometry.viewport) {
          console.log(place.geometry.location.lat());
          console.log(place.geometry.location.lng());
          this.map.fitBounds(place.geometry.viewport);
        } else {
          this.map.setCenter(place.geometry.location);
          this.map.setZoom(15);

        }
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);

        const lat = place.geometry.location.lat();
        const long = place.geometry.location.lng();

        

        this.latPenghasil = lat;
        this.longPenghasil = long;

        let address = '';
        if (place.address_components) {
          address = [
            (place.address_components[0] && place.address_components[0].short_name || ''),
            (place.address_components[1] && place.address_components[1].short_name || ''),
            (place.address_components[2] && place.address_components[2].short_name || '')
          ].join(' ');
        }

        // infoWindowContent.children['place-icon'].src = place.icon;
        infoWindowContent.children['place-name'].textContent = place.name;
        infoWindowContent.children['place-address'].textContent = address;
        infoWindow.open(this.map, marker);

        
      });

    }).catch((error) => {
      console.log('Error getting location', error);
    });



    // const infoWindow = new google.maps.InfoWindow();
    // const pos = {
    //   lat: -6.2285507,
    //   lng: 106.7889774
    // };

    /*console.log(infoWindow);
    console.log(this.map);

    infoWindow.setPosition(pos);
    // infoWindow.setContent('Location found.');
    infoWindow.open(this.map);*/


    // this.map.setCenter(pos);


  }

  ngOnInit() {

  }

  addPenghasil() {
    console.log(this.form.value.nama);
    console.log(this.namaAlamat);

    if (!this.form.valid) {
      return;
    }

    this.loadingCtrl.create({
      message: 'Menambah Penghasil...'
    }).then(loadingEl => {
      loadingEl.present();
      this.apiService.tambahPenghasil(
        this.form.value.nama,
        this.namaAlamat,
        this.latPenghasil,
        this.longPenghasil
      ).subscribe(dataPenghasil => {
        console.log(dataPenghasil);
        loadingEl.dismiss();
        this.form.reset();

      });
    });
  }

}
