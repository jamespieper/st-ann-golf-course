import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeeTimePageComponent } from './tee-time-page/tee-time-page.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent, title: 'hOmE'},
    { path: 'tee-time-page', component: TeeTimePageComponent, title: 'Tee tImEs'},
    { path: 'scorecard', component: ScorecardComponent, title: 'SCOREcard'},
    { path: 'course-details', component: CourseDetailsComponent, title: 'cORse deTails'},
    //add paths for other Components
];
