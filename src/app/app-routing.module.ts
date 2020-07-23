import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {ReservationsComponent} from './reservations/reservations.component';
import {LandingComponent} from './landing/landing.component';

const routes: Routes = 
[{path:'reservations', component: ReservationsComponent},
 {path: 'landing', component: LandingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }