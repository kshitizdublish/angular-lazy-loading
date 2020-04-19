import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showPipeContainer: boolean = false;
  setStoredValue: string = '';
  getStoredValue: string = '';
  stdLastName: string = '';
  userDetails: any;
  userName: string = '';
  user4Email: any;
  nameLoading: boolean = false;
  emailLoading: boolean = false;

  fullName: "Hello Sujata";
  course = {
    title: 'One way binding',
    buttonStatus: true,
    rating: 4.95782,
    students: 30123877,
    price: 190.95,
    releasedate: new Date(2016, 3, 1),
    text: 'Angular components form the data structure of your application.'
  }

  constructor(
    private homeSvc: HomeService
  ) {}

  ngOnInit() { }

  onSaveBtnClick($event) {
    console.log("Save button is clicked", $event);
  }

  onStoreBtnClick() {
    this.homeSvc.setValue('storedValue', this.setStoredValue);
  }

  onShowBtnClick() {
    this.getStoredValue = this.homeSvc.getValue('storedValue');
  }

  getUserDetails() {
    this.nameLoading = true;
    this.homeSvc.getUserDetails().subscribe(
      (response) => { // 200 OK
       this.userDetails = response;
       this.nameLoading = false;
       if (this.userDetails.length > 0) {
         this.userName = this.userDetails[0].name;
       }
      }, (error) => { // 404/500/400/504 errors
        console.log('Not able to fetch users, rason = ', error.statusText);
      }
    );
  }

  storeStudentDetails() {
    const studentDetails = {
      firstName: 'Kshitiz',
      lastName: 'Dublish'
    }
    this.homeSvc.setValue('studentDetails',JSON.stringify(studentDetails));
  }

  getStudentDetails() {
    const stdData = JSON.parse(this.homeSvc.getValue('studentDetails'));
    this.stdLastName = stdData.lastName;
  }

  getComments() {
    this.emailLoading = true;
    this.homeSvc.getComments().subscribe(
      (response: any) => {
        this.emailLoading = false;
        const user4Data = response.filter(user => user.id === 4); // will give specific data
        this.user4Email = user4Data[0].email;
      }, (error: any) => {
        console.log('getcomments error = ', error.statusText);
      }
    )
  }

}
