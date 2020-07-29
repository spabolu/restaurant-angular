import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { LocationsComponent } from './locations/locations.component';
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
    SecondPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBQC3NyLvsbNKrFMUAJzGO86VytwNLx-PQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
