import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AppTopBarComponent } from './app.topbar.component';
import { AppSideBarComponent } from './app.sidebar.component';
import { AppEditorComponent } from './app.editor.component';

import { NewRxComponent } from './project/view/newrx/newrx.component';
import { FormsDemoComponent } from './project/view/formsdemo.component';
import { DataDemoComponent } from './project/view/datademo.component';
import { PanelsDemoComponent } from './project/view/panelsdemo.component';
import { OverlaysDemoComponent } from './project/view/overlaysdemo.component';
import { MenusDemoComponent } from './project/view/menusdemo.component';
import { MessagesDemoComponent } from './project/view/messagesdemo.component';
import { ChartsDemoComponent } from './project/view/chartsdemo.component';
import { FileDemoComponent } from './project/view/filedemo.component';
import { MiscDemoComponent } from './project/view/miscdemo.component';
import { DocumentationComponent } from './project/view/documentation.component';

import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { GalleriaModule } from 'primeng/galleria';
import { InplaceModule } from 'primeng/inplace';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { LightboxModule } from 'primeng/lightbox';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SpinnerModule } from 'primeng/spinner';
import { SplitButtonModule } from 'primeng/splitbutton';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TerminalModule } from 'primeng/terminal';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { VirtualScrollerModule } from 'primeng/virtualscroller';

import { CarService } from './project/service/carservice';
import { CountryService } from './project/service/countryservice';
import { EventService } from './project/service/eventservice';
import { NodeService } from './project/service/nodeservice';

//services
import { NewRxService } from 'src/app/project/service/newrx.service';
import { ProfileService } from 'src/app/project/service/profile.service';
import { FavoriteService } from 'src/app/project/service/favorite.service';
import { PendingRxService } from 'src/app/project/service/pendingrx.service';
import { RefillService } from 'src/app/project/service/refill.service';
import { FailedRxService } from 'src/app/project/service/failedRx.service';

//scrollbar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ProfileComponent } from './project/view/profile/profile.component'; 
import { HeaderComponent } from './project/view/header/header.component'; 
import { SidebarComponent } from './project/view/sidebar/sidebar.component'; 
import { FavoritesComponent } from './project/view/favorites/favorites.component';
import {SidebarModule} from 'primeng/sidebar';
import { ReportsComponent } from './project/view/reports/reports.component';
import { AlertComponent } from './project/view/alerts/alerts.component';
import { CurrentMedsAllergiesComponent } from './project/view/currentmedsallergies/currentmedsallergies.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MedicationHistoryComponent } from './project/view/medicationhistory/medicationhistory.component';
import { AccountComponent } from './project/view/account/account.component';
import { PrescribeComponent } from './project/view/prescriber/prescriber.component';
import { PharmacySettingsComponent } from './project/view/pharmacysettings/pharmacysettings.component';
import { PDRComponent } from './project/view/pdr/pdr.component';
import { PDMPWebsiteComponent } from './project/view/pdmpwebsite/pdmpwebsite.component';
import { PermissionsComponent } from './project/view/permissions/permissions.component';
import { ClickOutsideModule } from 'ng-click-outside';
 

@NgModule({
    declarations: [
        AppComponent,
        AppTopBarComponent,
        AppEditorComponent,
        AppSideBarComponent,
        NewRxComponent,
        FormsDemoComponent,
        DataDemoComponent,
        PanelsDemoComponent,
        OverlaysDemoComponent,
        MenusDemoComponent,
        MessagesDemoComponent,
        ChartsDemoComponent,
        FileDemoComponent,
        MiscDemoComponent,
        DocumentationComponent,
        ProfileComponent,
        HeaderComponent,
        SidebarComponent,
        FavoritesComponent,
        ReportsComponent,
        AlertComponent,
        CurrentMedsAllergiesComponent,
        MedicationHistoryComponent,
        AccountComponent,
        PrescribeComponent,
        PharmacySettingsComponent,
        PDRComponent,
        PDMPWebsiteComponent,
        PermissionsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutes,
        HttpClientModule,
        BrowserAnimationsModule,
        AccordionModule,
        AutoCompleteModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        ChartModule,
        CheckboxModule,
        ChipsModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        ColorPickerModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        DropdownModule,
        EditorModule,
        FieldsetModule,
        FileUploadModule,
        FullCalendarModule,
        GalleriaModule,
        InplaceModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        SelectButtonModule,
        SlideMenuModule,
        SliderModule,
        SpinnerModule,
        SplitButtonModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TerminalModule,
        TieredMenuModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        VirtualScrollerModule,
        PerfectScrollbarModule,
        SidebarModule,
        ReactiveFormsModule,
        HttpClientModule,
        ClickOutsideModule 
    ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        CarService,
        CountryService,
        EventService,
        NodeService,
        NewRxService,
        ProfileService,
        FavoriteService,
        PendingRxService,
        RefillService,
        FailedRxService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
