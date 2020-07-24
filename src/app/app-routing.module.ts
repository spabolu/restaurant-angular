import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {ReservationsComponent} from './reservations/reservations.component';
import {LandingComponent} from './landing/landing.component';
import {LocationsComponent} from './locations/locations.component';

const routes: Routes = 
[{path:'reservations', component: ReservationsComponent},
 {path: 'landing', component: LandingComponent},
 {path: 'locations', component: LocationsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }