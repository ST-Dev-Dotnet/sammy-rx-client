import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls:['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    submitted = false;
    showContainerNewRx :boolean=false;
    showContainerFavorites: boolean = false;
    showContainerMedAllergies :boolean=false;
    showContainerAlerts :boolean=false;
    showContainerReports :boolean=false;
    ngOnInit() {
          //first time log page flags        
          this.showContainerNewRx=true; 
          this.showContainerFavorites = false;
          this.showContainerMedAllergies =false;
          this.showContainerAlerts =false;
          this.showContainerReports =false;
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
}
