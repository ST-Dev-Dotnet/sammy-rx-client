import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FailedRx } from '../models/failedRx';
import { environment } from 'src/environments/environment';

@Injectable()
export class FailedRxService{
    private readonly failedRxPath = '/failedRx/';
     
    constructor( private http: HttpClient)
    {
      
    }
    getAllFailedRx() {
        debugger;
        return this.http.get<FailedRx[]>(`${environment.serverApiBase}${this.failedRxPath}`);
    }
}