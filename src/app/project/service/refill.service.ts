import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PendingRx } from '../models/pendingRx';
import { Refill } from '../models/refill';
import { environment } from 'src/environments/environment';

@Injectable()
export class RefillService{
    private readonly refillPath = '/refills/';
     
    constructor( private http: HttpClient)
    {
      
    }
    getAllRefill() {
        debugger;
        return this.http.get<Refill[]>(`${environment.serverApiBase}${this.refillPath}`);
    }
}