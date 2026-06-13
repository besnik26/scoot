import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';
import { LocationComponent } from './routes/location/location.component';
import { CareersComponent } from './routes/careers/careers.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'locations', component: LocationComponent},
    {path:'careers', component: CareersComponent},
    {path:'**', redirectTo: '', pathMatch: 'full'}


];
