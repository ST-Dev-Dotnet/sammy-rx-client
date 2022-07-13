import { Component, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';


@Component({
    selector: 'app-reports',
    templateUrl: 'reports.component.html'
})
export class ReportsComponent implements OnInit {
    data: any;
    options: any;
    date1: Date;
    newCustomDate: Date;
   
    fromDate: Date;
    todate: Date;
    es: any;
    cols: any[];


    invalidDates: Array<Date>
 
    ngOnInit() {     
        this.fromDate = new Date();
        this.todate = new Date();
        this.cols = [
            { field: 'date', header: 'Date' },
            { field: 'time', header: 'Time' },
            { field: 'user', header: 'User' },
            { field: 'provider', header: 'Provider' },
            { field: 'event', header: 'Event' },
            { field: 'station', header: 'Station' },
            { field: 'old value', header: 'Old Value' },
            { field: 'new value', header: 'New Value' }
        ];
        
    }

    constructor() {



        this.data = {
            labels: ['Basic Reports'],
            datasets: [
                // {
                //     label: '',
                //     backgroundColor: '#ffffff',
                //     borderColor: '#ffffff',
                //     data: [0]
                // },
                {       
                    label: 'Week 1',
                    backgroundColor: '#003c30',
                    borderColor: '#003c30',
                    data: [5]
                },
                {
                    label: 'Week 2',
                    backgroundColor: '#01665e',
                    borderColor: '#01665e',
                    data: [10]
                },
                {
                    label: 'Week 3',
                    backgroundColor: '#35978f',
                    borderColor: '#35978f',
                    data: [20]
                },
                {
                    label: 'Week 4',
                    backgroundColor: '#80cdc1',
                    borderColor: '#80cdc1',
                    data: [15]
                }
            ]
        }
           
}


}

