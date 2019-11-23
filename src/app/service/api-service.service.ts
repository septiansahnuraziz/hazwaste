import { LoginService } from './../login/login.service';
import { Injectable } from '@angular/core';

import { Platform } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url = 'http://localhost:3000';
  urlTest = 'https://hazwaste.firebaseio.com';

  // tslint:disable-next-line: variable-name
  private _kendaraan = new BehaviorSubject<Kendaraan[]>([]);

  get vehicles() {
    return this._kendaraan.asObservable();
  }

  constructor(
    private http: HttpClient,
    private loginService: LoginService
  ) { }


  addKendaraan(
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

}
