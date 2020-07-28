import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  times: number = 0;
  pageNumber = 1;

  constructor() { }

  ngOnInit(): void {
  }

  incrementPage() {
    this.pageNumber++;
    console.log(this.pageNumber);

  }

}
