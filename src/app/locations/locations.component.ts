import { Component, OnInit } from '@angular/core';
declare let L;

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const map = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);


        L.marker([36.1716, -115.1525]).addTo(map)
        .bindPopup('Las Vegas Restaurant')
        .openPopup();

        L.marker([38.8953,-77.1227]).addTo(map)
        .bindPopup('Washington Restaurant')
        .openPopup();

        L.marker([32.7754,-96.7999]).addTo(map)
        .bindPopup('Dallas Restaurant')
        .openPopup();

        L.marker([34.0522,-118.2437]).addTo(map)
        .bindPopup('Los Angeles Restaurant')
        .openPopup();

        L.marker([40.7128, -74.0060]).addTo(map)
        .bindPopup('New York Restaurant')
        .openPopup();

        L.marker([33.7490, -84.3880]).addTo(map)
        .bindPopup('Atlanta Restaurant')
        .openPopup();

        L.marker([33.4484, -112.0740]).addTo(map)
        .bindPopup('Phoenix Restaurant')
        .openPopup();

        L.marker([47.6062, -122.3321]).addTo(map)
        .bindPopup('Seattle Restaurant')
        .openPopup();
  }
}
