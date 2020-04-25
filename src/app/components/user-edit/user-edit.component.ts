import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserInterface } from 'src/app/model/user-details';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  @Input() editUserDetails: UserInterface;
  @Output() closeEditMode = new EventEmitter();
  showSuccessMsg: boolean = false;
  userDetails: UserInterface;

  constructor() {
  }

  ngOnInit() {
    this.userDetails = this.editUserDetails;
  }

  hideEditMode() {
    this.closeEditMode.emit(this.editUserDetails);
  }

  onSaveBtnClick() {
    this.editUserDetails = this.userDetails;
    this.showSuccessMsg = true;
  }

}
