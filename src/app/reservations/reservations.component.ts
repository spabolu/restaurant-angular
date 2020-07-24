import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  timeCounter: number = 0;
  pageNum = 1;

  constructor() {}
  reservationTitle = "Reservations";

  ngOnInit(): void 
  {}

  pageIncrementer()
  {
    this.pageNum++;
    console.log(this.pageNum);
  }

}
