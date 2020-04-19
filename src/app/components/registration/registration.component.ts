import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('register', {static: true}) register: ElementRef;

  registerData = {
    fName: '',
    lName: '',
    emailAddress: '',
    confirmEmailAddress: ''
  }
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  redirectToLogin = () => {
    this.router.navigate(['/login']);
  }
  onSubmitClick = () => {
    
  }

}
