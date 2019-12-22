import { Pengemudi } from './pengemudi.model';
import { LoginService } from './../login/login.service';
import { Injectable } from '@angular/core';

import { Platform } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';
import { Kendaraan } from './kendaraan.model';


interface VehicleData {
  plat: string;
  jenis: string;
  kapasitas: number;
  noBapedal: string;
  userId: string;
}

interface DriverData {
  noSim: string;
  nama: string;
  foto: string;
  noTelp: string;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url = 'http://localhost:3000';
  urlTest = 'https://hazwaste.firebaseio.com';

  // tslint:disable-next-line: variable-name
  private _kendaraan = new BehaviorSubject<Kendaraan[]>([]);
  private _pengemudi = new BehaviorSubject<Pengemudi[]>([]);

  get vehicles() {
    return this._kendaraan.asObservable();
  }

  get drivers() {
    return this._pengemudi.asObservable();
  }

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
  ) { }

  getCobaKendaraan() {
    return this.http.get(this.url + '/kendaraan', {responseType: 'json'});
  }

  tambahKendaraan(plat, jenis, no_klh) {
    const body = new URLSearchParams();
    body.append('plat', plat);
    body.append('jenis', jenis);
    body.append('no_klh', no_klh);

    const options = {
      headers: new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
    };

    return this.http.post(this.url + '/kendaraan', body.toString(), options);
  }

  tambahPerizinan(noIjin, berlakuMulai, berlakuSampai) {
    const body = new URLSearchParams();
    body.append('nomor', noIjin);
    body.append('mulai', berlakuMulai);
    body.append('selesai', berlakuSampai);

    const options = {
      headers: new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
    };

    return this.http.post(this.url + '/ijin', body.toString(), options);
  }

  tambahPenghasil(nama, lokasi) {
    const body = new URLSearchParams();
    body.append('nama', nama);
    body.append('lokasi', lokasi);

    const options = {
      headers: new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
    };

    return this.http.post(this.url + '/penghasil', body.toString(), options);
  }

  /*addKendaraan(
    plat: string,
    jenis: string,
    kapasitas: number,
    noBapedal: string
  ) {
    let generatedId: string;
    const newVehicle = new Kendaraan(
      Math.random().toString(),
      plat,
      jenis,
      kapasitas,
      noBapedal,
      this.loginService.userId
    );

    return this.http.post<{name: string}>(
      `https://hazwaste.firebaseio.com/kendaraan.json`,
    {
      ...newVehicle, id: null
    })
    .pipe(
      switchMap(resData => {
        generatedId = resData.name;
        return this.vehicles;
      }),
      take(1),
      tap(vehicles => {
        newVehicle.id = generatedId;
        this._kendaraan.next(vehicles.concat(newVehicle));
      })
    );
  }

  fetchKendaraan() {
    return this.http.get<{[key: string]: VehicleData}>(
      `https://hazwaste.firebaseio.com/kendaraan.json`
    ).pipe(map(resData => {
      const vehicles = [];
      for (const key in resData) {
        if (resData.hasOwnProperty(key)) {
          vehicles.push(new Kendaraan(
            key,
            resData[key].plat,
            resData[key].jenis,
            resData[key].kapasitas,
            resData[key].noBapedal,
            resData[key].userId,

          ));
        }
      }

      return vehicles;
    }),
    tap(vehicles => {
      this._kendaraan.next(vehicles);
    })
    );
  }

  /*getKendaraan(idKendaraan: string) {
    return this.http.get<VehicleData>(`https://hazwaste.firebaseio.com/kendaraan/${idKendaraan}.json`)
    .pipe(
      map(vehicleData => {
        return new Kendaraan
        (
          idKendaraan,
          vehicleData.plat,
          vehicleData.jenis,
          vehicleData.noKlh
        );
      })
    );
  }*/

  /*updateKendaraan(
    idKendaraan: string,
    plat: string,
    jenis: string,
    noKlh: string,
  ) {
    let updatedVehicles: Kendaraan[];
    return this.vehicles.pipe(
      take(1),
      switchMap(vehicles => {
        if (!vehicles || vehicles.length <= 0) {
          return this.fetchKendaraan();
        } else {
          return of(vehicles);
        }
      }),
      switchMap(vehicles => {
        const updatedVehicleIndex = vehicles.findIndex(kend => kend.id === idKendaraan);
        updatedVehicles = [...vehicles];
        const dataLama = updatedVehicles[updatedVehicleIndex];
        updatedVehicles[updatedVehicleIndex] = new Kendaraan(
          dataLama.id,
          dataLama.plat,
          dataLama.jenis,
          dataLama.noKlh
        );
        return this.http.put(
          `https://hazwaste.firebaseio.com/kendaraan/${idKendaraan}.json`,
          {...updatedVehicles[updatedVehicleIndex], id: null}
        );
      }),
      tap(() => {
        this._kendaraan.next(updatedVehicles);
      })
    );
  }*/

  getPengemudi() {
    // return this.http.get(this.url + '/pengemudi', {responseType: 'json'});
    return this.http.get(this.url + '/pengemudi', {responseType: 'json'});
  }

  tambahPengemudi(sim, nama, telepon) {
    const body = new URLSearchParams();
    body.append('sim', sim);
    body.append('nama', nama);
    body.append('telepon', telepon);

    const options = {
      headers: new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
    };

    return this.http.post(this.url + '/pengemudi', body.toString(), options);
  }

  /*addPengemudi(
    nama: string,
    noSim: string,
    noTelp: string
  ) {
    let generatedId: string;
    const newDriver = new Pengemudi(
      Math.random().toString(),
      nama,
      noSim,
      'https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png',
      noTelp,
      this.loginService.userId
    );

    return this.http.post<{name: string}>(
      `https://hazwaste.firebaseio.com/pengemudi.json`,
    {
      ...newDriver, id: null
    })
    .pipe(
      switchMap(resData => {
        generatedId = resData.name;
        return this.drivers;
      }),
      take(1),
      tap(drivers => {
        newDriver.id = generatedId;
        this._pengemudi.next(drivers.concat(newDriver));
      })
    );
  }

  fetchPengemudi() {
    return this.http.get<{[key: string]: DriverData}>(
      `https://hazwaste.firebaseio.com/pengemudi.json`
    ).pipe(map(resData => {
      const drivers = [];
      for (const key in resData) {
        if (resData.hasOwnProperty(key)) {
          drivers.push(new Pengemudi(
            key,
            resData[key].nama,
            resData[key].noSim,
            resData[key].foto,
            resData[key].noTelp,
            resData[key].userId,

          ));
        }
      }
      console.log(drivers);
      return drivers;
    }),
    tap(drivers => {
      this._pengemudi.next(drivers);
    })
    );
  }*/

  getPenghasil() {
    return this.http.get(this.url + '/penghasil');
  }

  getJenisLimbah() {
    return this.http.get(this.url + '/jenis');
  }

  getKemasan() {
    return this.http.get(this.url + '/kemasan');
  }

  getUnit() {
    return this.http.get(this.url + '/unit');
  }
}
