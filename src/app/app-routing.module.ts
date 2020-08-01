import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { LandingComponent } from './landing/landing.component';
import { LocationsComponent } from './locations/locations.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes =
  [{ path: 'reservations', component: ReservationsComponent },
  { path: '', component: LandingComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'menu', component: MenuComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'checkout', component: CheckoutComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
