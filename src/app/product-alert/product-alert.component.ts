import { Component, EventEmitter,  Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {
@Input() productinput;
@Output() notifyMe = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}