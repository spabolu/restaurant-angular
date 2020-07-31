import { Component, OnInit, Input } from '@angular/core';
import { restaurant_locations } from 'src/app/locations/restaurant_locations.js'

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  timeCounter: number = 0;
  pageNum = 1;

  name: any;
  city: { target: { value: any; }; };
  time: { target: { value: any; }; };

  constructor() { }
  reservationTitle = "Reservations";

  restaurant_locations = restaurant_locations

  ngOnInit(): void { }

  pageIncrementer(name, city, time) {
    this.pageNum++;
    console.log(this.pageNum);
    console.log(name.target.value);
    console.log(city.target.value);
    console.log(time.target.value);
  }

}
