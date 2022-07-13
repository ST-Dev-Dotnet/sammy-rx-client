import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
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
import { ProfileComponent } from './project/view/profile/profile.component';
import { SidebarComponent } from './project/view/sidebar/sidebar.component';
import { FavoritesComponent } from './project/view/favorites/favorites.component';
import { ReportsComponent } from './project/view/reports/reports.component';
import { AlertComponent } from './project/view/alerts/alerts.component';
import { CurrentMedsAllergiesComponent } from './project/view/currentmedsallergies/currentmedsallergies.component';
import { MedicationHistoryComponent } from './project/view/medicationhistory/medicationhistory.component';

export const routes: Routes = [
    { path: '', component: NewRxComponent },
    { path: 'forms', component: FormsDemoComponent },
    { path: 'data', component: DataDemoComponent },
    { path: 'panels', component: PanelsDemoComponent },
    { path: 'overlays', component: OverlaysDemoComponent },
    { path: 'menus', component: MenusDemoComponent },
    { path: 'messages', component: MessagesDemoComponent },
    { path: 'charts', component: ChartsDemoComponent },
    { path: 'file', component: FileDemoComponent },
    { path: 'misc', component: MiscDemoComponent },
    { path: 'documentation', component: DocumentationComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'sidebar',component:SidebarComponent},
    { path:'favorites',component:FavoritesComponent},
    { path:'reports',component:ReportsComponent},
    { path:'alerts',component:AlertComponent},
    { path:'currentmeds&allergies',component:CurrentMedsAllergiesComponent},
    { path:'medicationhistory',component:MedicationHistoryComponent},
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
