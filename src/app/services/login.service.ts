import { Injectable } from '@angular/core';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginJson = Users;

  constructor() { }

  loginApi = (loginData: any) => {
    if (
      loginData.emailAddress === this.loginJson[0].emailAddress
      && loginData.password === this.loginJson[0].password
    ) {
      // store the token
      this.setToken(this.loginJson[0].token);
      return this.loginJson[0];
    } else if (
      loginData.emailAddress === this.loginJson[1].emailAddress
      && loginData.password === this.loginJson[1].password
    ) {
      // store the token
      this.setToken(this.loginJson[1].token);
      return this.loginJson[1];
    } else {
      return {
        'message': 'User is not registered'
      };
    }
  }

  // set the token
  setToken = (userToken: string) => {
    localStorage.setItem('token', userToken);
  }

  // get the token
  getToken = () => {
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token');
    } else {
      return '';
    }
  }

  // remove token
  removetoken = () => {
    localStorage.removeItem('token');
  }

  clearStoredData() {
    localStorage.clear();
  }
}
