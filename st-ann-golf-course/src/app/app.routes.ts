import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeeTimePageComponent } from './tee-time-page/tee-time-page.component';

export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'tee-time-page', component: TeeTimePageComponent, title: 'Tee tImEs'},
    //add paths for other Components
];
