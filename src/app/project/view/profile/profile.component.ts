import { Component, OnInit } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/api';
import { ProfileService } from 'src/app/project/service/profile.service';
import { PatientProfile, MedicationHistory,History,Allergies } from '../../models/profile';

@Component({
    selector: 'app-profile',
    templateUrl: 'profile.component.html',
    styleUrls:['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
 

 constructor(private profileService: ProfileService){}
    ngOnInit() {
       
    }





}


   
  
      
 