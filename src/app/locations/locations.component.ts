import { Component, OnInit } from '@angular/core';
import { restaurant_locations } from 'src/app/locations/restaurant_locations.js'
declare let L;

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  constructor() {
  }

  locations = restaurant_locations

  ngOnInit(): void {

    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    for (var x = 0; x < this.locations.length; x++) {
      L.marker([this.locations[x].lat, this.locations[x].lon]).addTo(map)
        .bindPopup(this.locations[x].name)
        .openPopup();
    }
  }
}
