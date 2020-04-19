import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { FormControl, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';
import { EmitterService } from 'src/app/services/emitter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  display_email: string;
  showError: boolean = false;
  errorMsg: string = '';

  @ViewChild('login', {static: true}) login: ElementRef;

  loginData = {
    emailAddress: '',
    password: ''
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private router: Router,
    private loginSvc: LoginService,
    private globalSvc: GlobalService,
    private emitterSvc: EmitterService
  ) {
    // check the token existence
    if (this.loginSvc.getToken()) {
      this.emitterSvc.loginSuccess.emit(true);
    } else {
      this.emitterSvc.loginSuccess.emit(false);
    }
  }

  ngOnInit() {}

  onLoginClick = () => {
    this.showError = false;
    this.errorMsg = '';
    // convert into lowercase
    this.loginData.emailAddress = this.loginData.emailAddress.toLowerCase();
    this.loginData.password = this.loginData.password.toLowerCase();

    if (this.loginData.emailAddress && this.loginData.password) { //should not be empty
      const response = this.loginSvc.loginApi(this.loginData);
      if (response['message'] === 'Authorised') {
        // save the data
        this.globalSvc.setUserEmail(this.loginData.emailAddress);
        localStorage.setItem('emailAddress', this.loginData.emailAddress);
        this.emitterSvc.loginSuccess.emit(true);
      } else {
        this.showError = true;
        this.errorMsg = response['message'];
      }
    } else {
      this.showError = true;
      this.errorMsg = 'Something went wrong, please try again';
    }
  }

  onRegisterClick = () => {
    this.router.navigate(['/registration']);
  }

}
