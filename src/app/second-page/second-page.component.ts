import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  timeCounter: number = 0;
  pageNum = 1;

  confirm = "confirmation";
  
  constructor() { }

  ngOnInit(): void {}

//for using the "new reservations" button to go back to page 1
  pageIncrementer()
  {
    this.pageNum++;
    console.log(this.pageNum);
  }

}
