import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rx,Medications } from '../models/rx';
import { Patient } from '../models/patient';
import { environment } from 'src/environments/environment';

@Injectable()
export class NewRxService {
    private readonly newRxPath = '/newrx/';
    private readonly patientPath = '/patient/';
    private readonly medicationsPath = '/medications/';
    constructor(
        private http: HttpClient) { }
    //get newrx by id
    getNewRxbyId(id: number) {
        return this.http.get<Rx[]>(`${environment.serverApiBase}${this.newRxPath}${id}`);
    }

    //get all rx
    getAllNewRx() {
        return this.http.get<Rx[]>(`${environment.serverApiBase}${this.newRxPath}`);
    }

    //delete newrx by id
    deleteNewRx(id: number) {
        return this.http.delete<Rx[]>(`${environment.serverApiBase}${this.newRxPath}${id}`);
    }

        //create newrx 
        createNewRx(rx: Rx) {
            const newRxRequest = {
                id: rx.id,
                frequency: rx.frequency,
                includeFavorites: rx.includeFavorites,
                includeFavorites1: rx.includeFavorites1,
                includeFavorites1Chk: rx.includeFavorites1Chk,
                medication: rx.medication,
                print: rx.print,
                prn: rx.prn,
                quantity: rx.quantity,
                refills: rx.refills,
                route: rx.route,
                saveFavorites: rx.saveFavorites,
                additionalSig: rx.additionalSig,
                daw: rx.daw,
                daysSupply: rx.daysSupply,
            };

        return this.http.post<Rx>(`${environment.serverApiBase}${this.newRxPath}`, newRxRequest);
    }

    //get patients
    getAllPatients(){
        return this.http.get<Patient[]>(`${environment.serverApiBase}${this.patientPath}`);
    }

    getAllMedications(){
        return this.http.get<Medications[]>(`${environment.serverApiBase}${this.medicationsPath}`);
    }
}
