import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './app-spinner.component.html',
  styleUrls: ['./app-spinner.component.scss']
})
export class AppSpinnerComponent implements OnInit {

  mode = 'indeterminate';
  value = 10;
  diameter = 20;

  constructor() { }

  ngOnInit() { }

}
