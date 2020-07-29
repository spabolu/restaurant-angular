import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { LocationsComponent } from './locations/locations.component';
import { Page1Component } from './locations/page1/page1.component';
import { Page2Component } from './locations/page2/page2.component';
import { SecondPageComponent } from './reservations/second-page/second-page.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    AboutComponent,
    LandingComponent,
    HeaderComponent,
    ReservationsComponent,
    LocationsComponent,
    Page1Component,
    Page2Component,
    SecondPageComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
