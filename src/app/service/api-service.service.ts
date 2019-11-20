import { Injectable } from '@angular/core';

import { Platform } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private platform: Platform
  ) { }


  getKendaraan() {
    let head = { headers: new HttpHeaders()};
    return this.http.get(this.url + '/kendaraan', head);
  }

}
