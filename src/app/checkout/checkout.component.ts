import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  message = "CURRENTLY UNDER CONSTRUCTION";
  
  constructor() { }

  ngOnInit(): void {
  }

}
