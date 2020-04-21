import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() childListener: string; // for getting data from parent
  @Output() sendFromChild = new EventEmitter(); // send data to parent
  lastName: string = '';

  constructor() { }

  ngOnInit() {
  }

  sendToParent() {
    this.lastName = 'Firake';
    this.sendFromChild.emit(this.lastName);
  }

}
