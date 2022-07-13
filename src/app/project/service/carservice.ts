import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { car } from '../domain/car';

@Injectable()
export class CarService {

    constructor(private http: HttpClient) { }

    getCarsSmall() {
    return this.http.get<any>('assets/layout/data/cars-small.json')
      .toPromise()
      .then(res => res.data)
      .then(data => data);
    }

    getCarsMedium() {
    return this.http.get<any>('assets/layout/data/cars-medium.json')
      .toPromise()
      .then(res => res.data)
      .then(data => data);
    }

    getCarsLarge() {
    return this.http.get<any>('assets/layout/data/cars-large.json')
      .toPromise()
      .then(res => res.data)
      .then(data => data);
    }

  getCarsHuge() {
    return this.http.get<any>('assets/layout/data/cars-huge.json')
      .toPromise()
      .then(res => res.data)
      .then(data => data);
  }
}
