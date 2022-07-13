import { SelectItem, MenuItem, TreeNode } from 'primeng/api';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core'; 
import { Patient } from '../../models/patient';
import { Rx, Medications } from '../../models/rx';
import { HttpClient } from '@angular/common/http';
import { NewRxService } from 'src/app/project/service/newrx.service';
import {DialogModule} from 'primeng/dialog'; 
import { trigger } from '@angular/animations';
import { findElements } from '@fullcalendar/core';

@Component({
    selector: 'app-currentmedsallergies',
    templateUrl: 'currentmedsallergies.component.html',
    styleUrls:['./currentmedsallergies.component.scss']

})
export class CurrentMedsAllergiesComponent implements OnInit {
    selectedDay: string = '';
    showMyContainer: boolean = false;
    showMyContainerHeader: boolean = false;
    showMyContainerSidebar: boolean = false;
    newRxForm: FormGroup;
    submitted = false;
    showContainerNewRx :boolean=false;
    showContainerFavorites: boolean = false;
    showContainerMedAllergies :boolean=false;
    showContainerAlerts :boolean=false;
    showContainerReports :boolean=false;
    frequency: SelectItem[];
    quantity: SelectItem[];
    daysSupply: SelectItem[];
    form: SelectItem[];
    refills: SelectItem[];
    route:SelectItem[];
    daw: boolean = false;
    prn: boolean = false;
    includeFavorites:boolean=false;
    includeFavorites1Chk:boolean=false;
    saveFavorites:boolean=false;
    print:boolean=false;
    processing = false;
    rxs: Rx[];
    patients:Patient[];
    display:boolean=false;
    display_allergy=false;
    items: SelectItem[];
    item: string;
    displayPopup=false;
    filterMedications: any[];   
    verifyAddMedication=false;
    verified_data=false;
    medications: Medications[];
    show_succ_presc: boolean = false;
    show_error_presc = false;
    modal_manualadd=false;

    constructor(
        private formBuilder: FormBuilder,private httpClient: HttpClient,
        private newRxService: NewRxService) { }
        
    ngOnInit() {

        this.items = [];
        for (let i = 0; i < 10; i++) {
            this.items.push({label: 'Item ' + i, value: 'Item ' + i});
        }

        //frequency fake data dropdown
        this.frequency = [];
        this.frequency.push({ label: '-select-', value: '0' });
        this.frequency.push({ label: 'As Directed', value: '1' });
        this.frequency.push({ label: 'As Directed1', value: '2' });
        this.frequency.push({ label: 'As Directe2', value: '3' });
        this.frequency.push({ label: 'As Directed3', value: '4' });

        //quantity fake data dropdown
        this.quantity=[];
        this.quantity.push({ label: '-select-', value: '0' });
        this.quantity.push({label:'1',value:'1'});
        this.quantity.push({label:'2',value:'2'});
        this.quantity.push({label:'3',value:'3'});
        this.quantity.push({label:'4',value:'4'});

        //days suply fake data dropdown
        this.daysSupply=[];
        this.daysSupply.push({ label: '-select-', value: '0' });
        this.daysSupply.push({label:'7 Days',value:'1'});
        this.daysSupply.push({label:'8 Days',value:'2'});
        this.daysSupply.push({label:'9 Days',value:'3'});
        this.daysSupply.push({label:'10 Days',value:'4'});

        //form fake data dropdown
        this.form=[];
        this.form.push({ label: '-select-', value: '0' });
        this.form.push({label:'Tablet',value:'1'});
        this.form.push({label:'Syrup ',value:'2'});
        this.form.push({label:'Capsule',value:'3'});

        //refills fake data dropdown
        this.refills=[];
        this.refills.push({ label: '-select-', value: '0' });
        this.refills.push({label:'1',value:'1'});
        this.refills.push({label:'1',value:'2'});
        this.refills.push({label:'3',value:'3'});
        this.refills.push({label:'4',value:'4'});

        //route fake data dropdown
        this.route=[];
        this.route.push({ label: '-select-', value: '0' });
        this.route.push({label:'By Month',value:'1'});
        this.route.push({label:'By Year',value:'2'});

        //first time log page flags        
        this.showContainerNewRx=true; 
        this.showContainerFavorites = false;
        this.showContainerMedAllergies =false;
        this.showContainerAlerts =false;
        this.showContainerReports =false;

        this.newRxForm = this.formBuilder.group({
            medication:  new FormControl ('', Validators.required),
            frequency:['', Validators.required],
            quantity: ['', Validators.required],
            daysSupply :['', Validators.required],
            form:['', Validators.required],                
            refills :['', Validators.required],
            prn: [''],
            daw:[''],
            route: ['', Validators.required],
            includeFavorites: [''],
            additionalSig:[''],
            includeFavorites1Chk: [''],
            includeFavorites1 :[''],
            saveFavorites: [''],
            print :['']
        });
       this.getAllPatients();
       
    }
 
    get f() {return this.newRxForm.controls}
    
    onSubmit(){
        this.submitted = true; 
        if (this.newRxForm.invalid) {
            return;
          }

        const newRx = new Rx();
        newRx.id=7;
        newRx.frequency = this.f.frequency.value;
        newRx.includeFavorites = this.includeFavorites;
        newRx.includeFavorites1 = this.f.includeFavorites1.value;
        newRx.includeFavorites1Chk = this.includeFavorites1Chk;
        newRx.medication = this.f.medication.value;
        newRx.print = this.print;
        newRx.prn = this.prn;
        newRx.quantity = this.f.quantity.value;
        newRx.refills = this.f.refills.value;
        newRx.route = this.f.route.value;
        newRx.saveFavorites = this.saveFavorites;
        newRx.additionalSig = this.f.additionalSig.value;
        newRx.daw = this.daw;
        newRx.daysSupply = this.f.daysSupply.value;
        console.log(newRx);
        this.createNewRx(newRx);    
    }
      //New Rx button click
      rxFunClick(){
        this.showContainerNewRx=true; 
        this.showContainerFavorites = false;
        this.showContainerMedAllergies =false;
        this.showContainerAlerts =false;
        this.showContainerReports =false;
    }
    //favorites button Click
    favoritesClick(){
        this.showContainerFavorites=true; 
        this.showContainerNewRx = false;
        this.showContainerMedAllergies =false;
        this.showContainerAlerts =false;
        this.showContainerReports =false;
    }
    //Current Meds & Allergies button Click
    currentMedsAllergiesClick(){
        this.showContainerMedAllergies=true; 
        this.showContainerFavorites = false;
        this.showContainerNewRx =false;
        this.showContainerAlerts =false;
        this.showContainerReports =false;
    }
    //Alerts button click
    alertsClick(){
        this.showContainerAlerts=true; 
        this.showContainerFavorites = false;
        this.showContainerNewRx =false;
        this.showContainerMedAllergies =false;
        this.showContainerReports =false; 
    }
    //Reports button click
    reportsClick(){
        this.showContainerReports=true; 
        this.showContainerFavorites = false;
        this.showContainerNewRx =false;
        this.showContainerMedAllergies =false;
        this.showContainerAlerts =false;
    }   
  
    //post request for create new rx
  createNewRx(newRx) {
        this.newRxService.createNewRx(newRx).subscribe(
          (result: any) => {
            if (result) {
                console.log(result);
              debugger;
              this.processing = false;
              this.submitted = false;
            }
          },
          err => {
            this.submitted = false;
            this.processing = false;
          }
        );
      }

//get newrx by id
    getNewRxById(id:number) {
        this.newRxService
            .getNewRxbyId(id)
            .subscribe((rx: Rx[]) => {
                this.rxs = rx;
                console.log(
                    'New rx records by id',
                    this.rxs
                );
            });
    }

    //get all newrx records
    getAllNewRx() {
        this.newRxService
            .getAllNewRx()
            .subscribe((rx: Rx[]) => {
                this.rxs = rx;
                console.log(
                    'All new rx records',
                    this.rxs
                );
            });
    }

    //delete nerrx by id
    deletePreparation(id: number) {
        this.newRxService
          .deleteNewRx(id)
          .subscribe(
            () => {
                console.log("Record deleted")
                },
            err => {
              console.log(err);
            }
          );
      }

       //get all patients
    getAllPatients() {
        this.newRxService
            .getAllPatients()
            .subscribe((patients: Patient[]) => {
                this.patients = patients;
                console.log(
                    'All patients records',
                    this.rxs
                );
            });
    }
        showDialog() {
            this.display = true;
        }
        show_aller_selection()
        {
            this.display_allergy=true;
        }
        showPopup() {
            this.displayPopup = true;
        }

        //search
        filterMedication(event) {
            const query = event.query;
            this.filterMedications = this.searchMedication(query, this.medications);
        }
    
        searchMedication(query, medcations: Medications[]): any[] {
            const filtered: any[] = [];
            for (let i = 0; i < medcations.length; i++) {
                const mdc = medcations[i];
                if (mdc.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                    filtered.push(mdc);
                }
            }
            if (filtered.length === 0) {
                this.verifyAddMedication = true;
                this.verified_data = false;
            }
            else {
                this.verifyAddMedication = false;
                this.verified_data = true;
    
            }
    
            //console.log();
            return filtered;
    
        }
        
    manualadd_med() {

        this.modal_manualadd = true;
    }

    success_prescrib() {

        this.show_succ_presc = true;
    }
    error_prescrib() {

        this.show_error_presc = true;
    }
    close_error() {
        this.show_error_presc = false;
    } 

       
}



