import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PatientProfile ,MedicationHistory,History,Allergies} from 'src/app/project/models/profile';

@Injectable()
export class ProfileService {
    private readonly profilePath = '/profile/';
    private readonly medicationHistoryPath = '/medicationHistory/';
    private readonly historyPath = '/history/';
    private readonly allergiespath='/allergy/'
    constructor(
        private http: HttpClient) { }
    //get profile by id
    getProfileById(id: number) {
        return this.http.get<PatientProfile>(`${environment.serverApiBase}${this.profilePath}${id}`);
    }   

     //get medication history by id
     getMedicationHistory(id: number) {
        return this.http.get<MedicationHistory[]>(`${environment.serverApiBase}${this.medicationHistoryPath}?profileId=${id}`);
    } 

     //get history by id
     getHistory(id: number) {
        return this.http.get<History[]>(`${environment.serverApiBase}${this.historyPath}?medicationHistoryId=${id}`);
    } 

    getAllergiesForSelect(){
        return this.http.get<Allergies[]>(`${environment.serverApiBase}${this.allergiespath}`);
    }
}
    