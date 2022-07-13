import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-medicationhistory',
    templateUrl: 'medicationhistory.component.html',
    styleUrls:['./medicationhistory.component.scss']
})
export class MedicationHistoryComponent implements OnInit {
    display_singlemed_history:boolean=false;

    ngOnInit() {

    }
  show_singlemed_history()
    {
        this.display_singlemed_history = true;
    }



}
