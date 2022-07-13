import { Component, OnInit } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/api';
import { Patient } from '../../models/patient';
import { HttpClient } from '@angular/common/http';
import { NewRxService } from 'src/app/project/service/newrx.service';


@Component({
    selector: 'app-sidebarpatient',
    templateUrl: 'sidebar.component.html'
})

export class SidebarComponent implements OnInit { 
    patients:Patient[]; 
    constructor(private httpClient: HttpClient,
        private newRxService: NewRxService) { }
        
           //get all patients
           getAllPatients() {
            this.newRxService
                .getAllPatients()
                .subscribe((patients: Patient[]) => {
                    this.patients = patients;
                    console.log(
                        'All patients records',
                        this.patients
                    );
                });
        }
    ngOnInit() {
        //alert();
        this.getAllPatients();
    }
}
