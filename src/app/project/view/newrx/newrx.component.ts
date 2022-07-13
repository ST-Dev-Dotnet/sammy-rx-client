import { SelectItem, MenuItem, TreeNode } from 'primeng/api';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../../models/patient';
import { Rx, Medications } from '../../models/rx';
import { HttpClient } from '@angular/common/http';
import { NewRxService } from 'src/app/project/service/newrx.service';
import { ProfileService } from 'src/app/project/service/profile.service';
import { DialogModule } from 'primeng/dialog';
import { TouchSequence } from 'selenium-webdriver';
import { PatientProfile, MedicationHistory, History, Allergies } from '../../models/profile';
import { ClickOutsideModule } from 'ng-click-outside';

@Component({
    templateUrl: './newrx.component.html',
    styleUrls: ['./newrx.component.scss']
})
export class NewRxComponent implements OnInit {

    country: any;
    selectedDay: string = '';
    showMyContainer: boolean = false;
    showMyContainerHeader: boolean = false;
    showMyContainerSidebar: boolean = false;
    newRxForm: FormGroup;
    submitted = false;
    showContainerNewRx: boolean = false;
    showContainerFavorites: boolean = false;
    showContainerMedAllergies: boolean = false;
    showContainerAlerts: boolean = false;
    showContainerReports: boolean = false;
    frequency: SelectItem[];
    quantity: SelectItem[];
    daysSupply: SelectItem[];
    form: SelectItem[];
    refills: SelectItem[];
    route: SelectItem[];
    daw: boolean = false;
    prn: boolean = false;
    includeFavorites: boolean = false;
    includeFavorites1Chk: boolean = false;
    saveFavorites: boolean = false;
    print: boolean = false;
    processing = false;
    rxs: Rx[];
    patients: Patient[];
    display: boolean = false;
    displayPopup: boolean = false;
    medications: Medications[];
    filterMedications: any[];
    aa: any[];
    showMedicationHistory: boolean = false;
    items: MenuItem[];
    display_medvalid = false;
    showSettingDiv = false;
    accountPage = false;
    pdmpwebsitePage = false;
    pdrPage = false;
    permissionsPage = false;
    pharmacysettingsPage = false;
    prescriberPage = false;
    patientProfile: PatientProfile;
    medicationHistory: MedicationHistory[];
    history: History[];
    allergies: Allergies[];
    displayPopup_cmed: boolean = false;
    displayPopup_allg: boolean = false;
    displayPopup_med_his: boolean = false;
    display_singlemed_history = false;
    display_allergy = false;
    display_pharmalist = false;
    display_patients: boolean = false;
    showMedhistory: boolean = false;
    mobile: boolean = false;
    modal_manualadd: boolean = false;
    verifyAddMedication = false;
    verified_data = true;
    show_succ_presc: boolean = false;
    show_error_presc = false;
    showRxMenus = false;
    display_curedmed: boolean = false;


    constructor(
        private formBuilder: FormBuilder, private httpClient: HttpClient,
        private newRxService: NewRxService, private profileService: ProfileService) { }

    // Trigger the plus sign under the current medication to redirect to Newrx page


    ngOnInit() {

        if (window.screen.width <= 991) { // 768px portrait
            this.showMyContainer = true;
            this.showMyContainerHeader = false;

            //this.onClickedOutside(event);
        }

        if (window.screen.width >= 992) { // 768px portrait
            this.showSettingDiv = false;
            this.showMyContainerHeader = true;
            //this.onClickedOutside(event);
        }
        else {
            this.showSettingDiv = false;
        }



        this.getProfileById(1)
        this.getMedicationHistoryById(1)
        this.gerHistoryByMedication(1)
        this.getAlergies()

        //frequency fake data dropdown
        this.frequency = [];
        this.frequency.push({ label: '-select-', value: '0' });
        this.frequency.push({ label: 'As Directed', value: '1' });
        this.frequency.push({ label: 'As Directed1', value: '2' });
        this.frequency.push({ label: 'As Directe2', value: '3' });
        this.frequency.push({ label: 'As Directed3', value: '4' });

        //quantity fake data dropdown
        this.quantity = [];
        this.quantity.push({ label: '-select-', value: '0' });
        this.quantity.push({ label: '1', value: '1' });
        this.quantity.push({ label: '2', value: '2' });
        this.quantity.push({ label: '3', value: '3' });
        this.quantity.push({ label: '4', value: '4' });

        //days suply fake data dropdown
        this.daysSupply = [];
        this.daysSupply.push({ label: '-select-', value: '0' });
        this.daysSupply.push({ label: '7 Days', value: '1' });
        this.daysSupply.push({ label: '8 Days', value: '2' });
        this.daysSupply.push({ label: '9 Days', value: '3' });
        this.daysSupply.push({ label: '10 Days', value: '4' });

        //form fake data dropdown
        this.form = [];
        this.form.push({ label: '-select-', value: '0' });
        this.form.push({ label: 'Tablet', value: '1' });
        this.form.push({ label: 'Syrup ', value: '2' });
        this.form.push({ label: 'Capsule', value: '3' });

        //refills fake data dropdown
        this.refills = [];
        this.refills.push({ label: '-select-', value: '0' });
        this.refills.push({ label: '1', value: '1' });
        this.refills.push({ label: '1', value: '2' });
        this.refills.push({ label: '3', value: '3' });
        this.refills.push({ label: '4', value: '4' });

        //route fake data dropdown
        this.route = [];
        this.route.push({ label: '-select-', value: '0' });
        this.route.push({ label: 'By Month', value: '1' });
        this.route.push({ label: 'By Year', value: '2' });

        //first time log page flags        
        this.showContainerNewRx = true;
        this.showContainerFavorites = false;
        this.showContainerMedAllergies = false;
        this.showContainerAlerts = false;
        this.showContainerReports = false;

        this.newRxForm = this.formBuilder.group({
            medication: new FormControl('', Validators.required),
            frequency: ['', Validators.required],
            quantity: ['', Validators.required],
            daysSupply: ['', Validators.required],
            form: ['', Validators.required],
            refills: ['', Validators.required],
            prn: [''],
            daw: [''],
            route: ['', Validators.required],
            includeFavorites: [''],
            additionalSig: [''],
            includeFavorites1Chk: [''],
            includeFavorites1: [''],
            saveFavorites: [''],
            print: ['']
        });
        this.getAllPatients();
        this.getAllMedications();

        this.items = [{
            items: [
                { label: 'Account Settings', },
                { label: 'Download' }
            ]
        }];
    }



    get f() { return this.newRxForm.controls }


    onSubmit() {
        this.submitted = true;
        if (this.newRxForm.invalid) {
            return;
        }

        const newRx = new Rx();
        newRx.id = 7;
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

    onClickedOutside(e: Event) {
        if (window.screen.width <= 991) {
            this.showMyContainer = true;
        }
        else {

        }

    }

    mobmenuClick(e: Event) {
        this.showMyContainerHeader = false;
    }

    menuSettings() {
        this.showMyContainerHeader = !this.showMyContainerHeader;
        this.showSettingDiv = false;
    }
    
    toggle_settingmenu(e: Event) {
        if (window.screen.width >= 992) {

            this.showSettingDiv = false;
        }
        else {
            this.showSettingDiv = false;
        }

    }

    toggle_plist(e: Event) {


        if (window.screen.width <= 991) {

            this.showMyContainerSidebar = false;
        }
        else {
            this.showMyContainerSidebar = true;
        }

    }

    showmedhis() {
        this.showMyContainer = false;
        this.showContainerNewRx = false;
        this.showContainerFavorites = false;
        this.showContainerMedAllergies = false;
        this.showContainerAlerts = false;
        this.showContainerReports = false;
        this.showMedicationHistory = false;
        this.accountPage = false;
        this.pdmpwebsitePage = false;
        this.pdrPage = false;
        this.permissionsPage = false;
        this.pharmacysettingsPage = false;
        this.prescriberPage = false;
        this.showMedhistory = true;
        
    }

    showAccount() {
        this.showMyContainer = false;
        this.showContainerNewRx = false;
        this.showContainerFavorites = false;
        this.showContainerMedAllergies = false;
        this.showContainerAlerts = false;
        this.showContainerReports = false;
        this.showMedicationHistory = false;
        this.accountPage = true;
        this.pdmpwebsitePage = false;
        this.pdrPage = false;
        this.permissionsPage = false;
        this.pharmacysettingsPage = false;
        this.prescriberPage = false;
        this.showMedhistory = false;
        if (window.screen.width <= 992) { // 768px portrait 
            this.showMyContainerHeader = false;
            //this.onClickedOutside(event);
        }
    }
    //New Rx button click
    rxFunClick() {
        this.showContainerNewRx = true;
        this.showContainerFavorites = false;
        this.showContainerMedAllergies = false;
        this.showContainerAlerts = false;
        this.showContainerReports = false;
        this.showMedicationHistory = false;
        this.accountPage = false;
        this.pdmpwebsitePage = false;
        this.pdrPage = false;
        this.permissionsPage = false;
        this.pharmacysettingsPage = false;
        this.prescriberPage = false;
        this.showMedhistory = false;
        if (window.screen.width <= 992) { // 768px portrait 
            this.showMyContainerHeader = false;
            //this.onClickedOutside(event);
        }
        this.display_curedmed=false;
    }
    //favorites button Click
    favoritesClick() {
        this.showMedicationHistory = false;
        this.showContainerFavorites = true;
        this.showContainerNewRx = false;
        this.showContainerMedAllergies = false;
        this.showContainerAlerts = false;
        this.showContainerReports = false;
        this.accountPage = false;
        this.pdmpwebsitePage = false;
        this.pdrPage = false;
        this.permissionsPage = false;
        this.pharmacysettingsPage = false;
        this.prescriberPage = false;
        this.showMedhistory = false;
        this.display_curedmed=false;
        if (window.screen.width <= 992) { // 768px portrait 
            this.showMyContainerHeader = false;
            //this.onClickedOutside(event);
        }
    }
    //Current Meds & Allergies button Click
    currentMedsAllergiesClick() {
        this.display_curedmed = true;
    }
    currentMedsAllergiesClick1() {
        this.showMedicationHistory = false;
        this.showContainerFavorites = false;
        this.showContainerNewRx = false;
        this.showContainerMedAllergies = true;
        this.showContainerAlerts = false;
        this.showContainerReports = false;
        this.accountPage = false;
        this.pdmpwebsitePage = false;
        this.pdrPage = false;
        this.permissionsPage = false;
        this.pharmacysettingsPage = false;
        this.prescriberPage = false;
        this.showMedhistory = false;
        this.display_curedmed=false;
        if (window.screen.width <= 992) { // 768px portrait 
            this.showMyContainerHeader = false;
            //this.onClickedOutside(event);
        }
    }

    //Alerts button click
    alertsClick() {
        this.showMedicationHistory = false;
        this.showContainerAlerts = true;
        this.showContainerFavorites = false;
        this.showContainerNewRx = false;
        this.showContainerMedAllergies = false;
        this.showContainerReports = false;
        this.accountPage = false;
        this.pdmpwebsitePage = false;
        this.pdrPage = false;
        this.permissionsPage = false;
        this.pharmacysettingsPage = false;
        this.prescriberPage = false;
        this.showMedhistory = false;
        this.display_curedmed=false;
        if (window.screen.width <= 992) { // 768px portrait 
            this.showMyContainerHeader = false;
            //this.onClickedOutside(event);
        }
    }
    //Reports button click
    reportsClick() {
        this.showMedicationHistory = false;
        this.showContainerReports = true;
        this.showContainerFavorites = false;
        this.showContainerNewRx = false;
        this.showContainerMedAllergies = false;
        this.showContainerAlerts = false;
        this.accountPage = false;
        this.pdmpwebsitePage = false;
        this.pdrPage = false;
        this.permissionsPage = false;
        this.pharmacysettingsPage = false;
        this.prescriberPage = false;
        this.showMedhistory = false;
        this.display_curedmed=false;
        if (window.screen.width <= 992) { // 768px portrait 
            this.showMyContainerHeader = false;
            //this.onClickedOutside(event);
        }
    }
    medicationClick() {
        this.showMedicationHistory = true;
        this.showContainerReports = false;
        this.showContainerFavorites = false;
        this.showContainerNewRx = false;
        this.showContainerMedAllergies = false;
        this.showContainerAlerts = false;
        this.accountPage = false;
        this.pdmpwebsitePage = false;
        this.pdrPage = false;
        this.permissionsPage = false;
        this.pharmacysettingsPage = false;
        this.prescriberPage = false;
        this.showMedhistory = false;
        this.display_curedmed=false;
        if (window.screen.width <= 992) { // 768px portrait 
            this.showMyContainerHeader = false;
            //this.onClickedOutside(event);
        }
    }


    showPrescriber() {
        this.showMedicationHistory = false;
        this.showContainerReports = false;
        this.showContainerFavorites = false;
        this.showContainerNewRx = false;
        this.showContainerMedAllergies = false;
        this.showContainerAlerts = false;
        this.showMyContainer = false;
        this.accountPage = false;
        this.pdmpwebsitePage = false;
        this.pdrPage = false;
        this.permissionsPage = false;
        this.pharmacysettingsPage = false;
        this.prescriberPage = true;
        this.showMedhistory = false;
        this.display_curedmed=false;
        if (window.screen.width <= 992) { // 768px portrait 
            this.showMyContainerHeader = false;
            //this.onClickedOutside(event);
        }
    }
    showPermissions() {
        this.showMedicationHistory = false;
        this.showMyContainer = false;
        this.showContainerReports = false;
        this.showContainerFavorites = false;
        this.showContainerNewRx = false;
        this.showContainerMedAllergies = false;
        this.showContainerAlerts = false;
        this.accountPage = false;
        this.pdmpwebsitePage = false;
        this.pdrPage = false;
        this.permissionsPage = true;
        this.pharmacysettingsPage = false;
        this.prescriberPage = false;
        this.showMedhistory = false;
        this.display_curedmed=false;
        if (window.screen.width <= 992) { // 768px portrait 
            this.showMyContainerHeader = false;
            //this.onClickedOutside(event);
        }

    }

    showPharmacy() {
        this.showMedicationHistory = false;
        this.showMyContainer = false;
        this.showContainerReports = false;
        this.showContainerFavorites = false;
        this.showContainerNewRx = false;
        this.showContainerMedAllergies = false;
        this.showContainerAlerts = false;
        this.accountPage = false;
        this.pdmpwebsitePage = false;
        this.pdrPage = false;
        this.permissionsPage = false;
        this.pharmacysettingsPage = true;
        this.prescriberPage = false;
        this.showMedhistory = false;
        this.display_curedmed=false;
        if (window.screen.width <= 992) { // 768px portrait 
            this.showMyContainerHeader = false;
            //this.onClickedOutside(event);
        }
    }

    showPDR() {
        this.showMedicationHistory = false;
        this.showMyContainer = false;
        this.showContainerReports = false;
        this.showContainerFavorites = false;
        this.showContainerNewRx = false;
        this.showContainerMedAllergies = false;
        this.showContainerAlerts = false;
        this.accountPage = false;
        this.pdmpwebsitePage = false;
        this.pdrPage = true;
        this.permissionsPage = false;
        this.pharmacysettingsPage = false;
        this.prescriberPage = false;
        this.showMedhistory = false;
        this.display_curedmed=false;
        if (window.screen.width <= 992) { // 768px portrait 
            this.showMyContainerHeader = false;
            //this.onClickedOutside(event);
        }
    }

    showPDMP() {
        this.showMedicationHistory = false;
        this.showContainerReports = false;
        this.showMyContainer = false;
        this.showContainerFavorites = false;
        this.showContainerNewRx = false;
        this.showContainerMedAllergies = false;
        this.showContainerAlerts = false;
        this.accountPage = false;
        this.pdmpwebsitePage = true;
        this.pdrPage = false;
        this.permissionsPage = false;
        this.pharmacysettingsPage = false;
        this.prescriberPage = false;
        this.showMedhistory = false;
        this.display_curedmed=false;
        if (window.screen.width <= 992) { // 768px portrait 
            this.showMyContainerHeader = false;
            //this.onClickedOutside(event);
        }
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
    getNewRxById(id: number) {
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
    myDivNew(){
        if (window.screen.width <= 992) {
        this.showMyContainerHeader=false;
        }
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

    getAllMedications() {
        this.newRxService.getAllMedications()
            .subscribe((mdc: Medications[]) => {
                this.medications = mdc;
                console.log(
                    'All medications records',
                    this.medications
                );
            });

    }
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


    showPopup() {
        this.displayPopup = true;
    }


    getProfileById(id: number) {
        this.profileService
            .getMedicationHistory(id)
            .subscribe((history: MedicationHistory[]) => {
                this.medicationHistory = history;
                console.log(
                    'medication by id',
                    this.medicationHistory
                );
            });
    }

    //get medication history by profile id
    getMedicationHistoryById(id: number) {
        this.profileService
            .getProfileById(id)
            .subscribe((prf: PatientProfile) => {
                this.patientProfile = prf;
            });
    }

    //get history by id
    gerHistoryByMedication(id: number) {
        this.profileService
            .getHistory(id)
            .subscribe((history: History[]) => {
                this.history = history;
                console.log(
                    'history by medication id',
                    this.history
                );
            });
    }

    //get allergies for select
    getAlergies() {
        this.profileService
            .getAllergiesForSelect()
            .subscribe((allergies: Allergies[]) => {
                this.allergies = allergies;
                console.log(
                    'all allergies for select',
                    this.allergies
                );
            });
    }

    onClickedOutsideMenu(e:Event){
        if (window.screen.width <= 992) {
       
    }
}

    showPopup_med() {
        this.displayPopup_cmed = true;
    }
    showPopup_all() {
        this.displayPopup_allg = true;
    }

    showPopup_med_his() {
        this.displayPopup_med_his = true;
    }
    show_singlemed_history() {
        this.display_singlemed_history = true;
    }

    show_aller_selection() {
        this.display_allergy = true;

    }

    get_newrx() {
        document.getElementById("btn-newrx").click();
        this.display_curedmed=false;
    }

    show_pharmalist() {
        this.display_pharmalist = true;

    }

    patient_srch() {
        this.display_patients = true;
    }


    show_prof() {
        this.showMyContainer = true;
        this.mobile = true;
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


