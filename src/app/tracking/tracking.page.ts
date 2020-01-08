import { ApiServiceService } from 'src/app/service/api-service.service';
import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.page.html',
  styleUrls: ['./tracking.page.scss'],
})
export class TrackingPage implements OnInit, AfterViewInit {
  

  lat: any;
  long: any;
  map;
  @ViewChild('mapElement', {static : true}) mapElement;

  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  listManifest: any = [];
  tanggal: Date;

  idPenghasil: any;
  idPengelola: any;
  listPenghasilById: any = [];
  listPengelolaById: any = [];

  origin: any;
  destination: any;

  constructor(
    private geolocation: Geolocation,
    private apiService: ApiServiceService
  ) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
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

      this.directionsDisplay.setMap(this.map);

      const infoWindow = new google.maps.InfoWindow();
      const infoWindowContent = document.getElementById('infowindow-content');
      infoWindow.setContent(infoWindowContent);

      const marker = new google.maps.Marker({
        // position: pos,
        map: this.map,
        title: 'Your location',
        anchorPoint: new google.maps.Point(0, 10)
      });
      infoWindow.open(this.map, marker);
  }).catch((error) => {
    console.log('Error getting location', error);
  });

    this.apiService.getAllManifest()
  .subscribe(dataManifest => {
    console.log(dataManifest);
    this.listManifest = dataManifest;
    // console.log(this.listManifest[0].id_penghasil);

    // tslint:disable-next-line: prefer-for-of
    for ( let i = 0; i < this.listManifest.length ; i ++) {
      // console.log(this.listManifest[i].id_penghasil);
      this.idPenghasil = this.listManifest[i].id_penghasil;
      this.idPengelola = this.listManifest[i].id_tujuan;
      // console.log(this.idPenghasil);

      this.apiService.getPenghasilById(this.idPenghasil).subscribe(dataPenghasilById => {
        console.log(dataPenghasilById);
        this.listPenghasilById.push(dataPenghasilById);
        this.listManifest[i].nama_penghasil = dataPenghasilById[0].nama;
        this.origin = this.listManifest[i].nama_penghasil;
        console.log(this.origin);
        this.listManifest[i].lat_penghasil = dataPenghasilById[0].latitude;
        this.listManifest[i].long_penghasil = dataPenghasilById[0].longitude;
        // console.log(this.listPenghasilById);
        // console.log(this.listPenghasilById);

        // console.log(this.listManifest);
      });

      this.apiService.getPengelolaById(this.idPengelola).subscribe(dataPengelolaById => {
        this.listPengelolaById.push(dataPengelolaById);
        this.listManifest[i].nama_tujuan = dataPengelolaById[0].nama;
        this.destination = this.listManifest[i].nama_tujuan;
        console.log(this.destination);
        this.listManifest[i].lat_tujuan = dataPengelolaById[0].latitude;
        this.listManifest[i].long_tujuan = dataPengelolaById[0].longitude;

      });
    }
  });

  
}

  clickManifest() {

    this.directionsService.route({
      origin: this.origin[1],
      destination: this.destination[1],
      travelMode: 'DRIVING',
    }, (response, status) => {
      if (status === 'OK' ) {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
}
