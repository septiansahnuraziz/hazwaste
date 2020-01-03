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

  listManifest: any;
  tanggal: Date;

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
    this.tanggal = dataManifest['tanggal'];
  });
}
}
