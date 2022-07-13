import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PendingRx } from '../models/pendingRx';
//import { Patient } from '../models/patient';
import { environment } from 'src/environments/environment';

@Injectable()
export class PendingRxService{
    private readonly failedRxPath = '/pendingRx/';
    //private readonly patientPath = '/patient/';
    private readonly medicationsPath = '/medications/';
     
    constructor( private http: HttpClient)
    {
      
    }
    getAllPendingRx() {
        debugger;
        return this.http.get<PendingRx[]>(`${environment.serverApiBase}${this.failedRxPath}`);
    }
}