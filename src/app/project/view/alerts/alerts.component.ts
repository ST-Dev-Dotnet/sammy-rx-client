import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'; 
import { Refill } from '../../models/refill';
import { PendingRx } from '../../models/pendingRx';
import { FailedRx } from '../../models/failedRx';
import { HttpClient } from '@angular/common/http';
import { PendingRxService } from 'src/app/project/service/pendingrx.service';
import { RefillService } from 'src/app/project/service/refill.service';
import {FailedRxService} from 'src/app/project/service/failedRx.service';


@Component({
    selector: 'app-alerts',
    templateUrl: 'alerts.component.html',
    styleUrls:['./alerts.component.scss']
})
export class AlertComponent implements OnInit {
    cols: any[];
    pendingRx:PendingRx[];
    refills: Refill[];
    failedRx:FailedRx[];
    display_printdialog=false;
    display_medvalid:boolean=false;
    
    constructor(
        private formBuilder: FormBuilder,private httpClient: HttpClient,
        private pendingRxService: PendingRxService,private refillService : RefillService,private failedRxService:FailedRxService) { }

    ngOnInit() {
        debugger
        
       const allPendingRx= this.getAllPendingRx();
       const refill= this.getAllRefill();
       const failedrx= this.getAllFailedRx();
       
    }

    handleChange(e) {
    var index = e.index;
}
getAllPendingRx(){
    debugger
    this.pendingRxService.getAllPendingRx()
    .subscribe((prx:PendingRx[])=>{
        this.pendingRx=prx;
         console.log('All pendingRx records',this.pendingRx);
    });
}
   
getAllRefill(){
    debugger
    this.refillService.getAllRefill()
    .subscribe((rfl:Refill[])=>{
        this.refills=rfl;
         console.log('All refill records',this.refills);
    });
}

getAllFailedRx(){
    debugger
    this.failedRxService.getAllFailedRx()
    .subscribe((frx:FailedRx[])=>{
        this.failedRx=frx;
         console.log('All failedRx records',this.failedRx);
    });
}

print_dialog()
{
    this.display_printdialog = true;

}

val_data_med()
{
    this.display_medvalid= true;
}


}



    

