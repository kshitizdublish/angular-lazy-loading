import { Component, OnInit } from '@angular/core';
import { USER_TABLE_DATA } from 'src/app/model/user-details';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  dataSource = USER_TABLE_DATA;

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
