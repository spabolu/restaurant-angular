import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  @Input() name;
  @Input() time;
  @Input() city;
  
  confirm = "confirmation";
  
  constructor() { }

  ngOnInit(): void {}

//for using the "new reservations" button to go back to page 1


}
