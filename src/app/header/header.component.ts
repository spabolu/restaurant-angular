import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
/*
  timeCounter: number = 0;
  pageNum = 2;
*/

  environment = environment
  constructor() { }
  ngOnInit(): void {
  }

/*
  pageDecrementer()
  {
    this.pageNum--;
    console.log(this.pageNum);
  }
*/

}
