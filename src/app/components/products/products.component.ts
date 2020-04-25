import { Component, OnInit } from '@angular/core';
import { USER_TABLE_DATA, UserInterface } from 'src/app/model/user-details';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'edit', 'delete'];
  dataSource = new MatTableDataSource(USER_TABLE_DATA);
  showEditMode: boolean = false;
  editDetails = {};

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

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

  editUser(element: UserInterface) {
    this.editDetails = element;
    this.showEditMode = true;
  }

}
