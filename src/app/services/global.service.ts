import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  setUserEmail = (loginData: any) => {
    localStorage.setItem('emailAddress', loginData);
  }
  getUserEmail = () => {
    if (localStorage.getItem('emailAddress')) {
      return localStorage.getItem('emailAddress');
    } else {
      return '';
    }
  }



}
