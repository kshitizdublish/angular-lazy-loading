import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  fromHomeLocalStr: string = '';

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('storedValue')) {
      this.fromHomeLocalStr = localStorage.getItem('storedValue');
    }
  }

  changeStoredValue() {
    localStorage.setItem('storedValue', 'Value Changed');
  }

}
