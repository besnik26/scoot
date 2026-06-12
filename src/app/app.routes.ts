import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LocationComponent } from './components/location/location.component';
import { CareersComponent } from './components/careers/careers.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'locations', component: LocationComponent},
    {path:'careers', component: CareersComponent},
    {path:'**', redirectTo: '', pathMatch: 'full'}


];
