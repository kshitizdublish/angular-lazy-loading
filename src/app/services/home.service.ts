import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  apiUrl: string = 'https://jsonplaceholder.typicode.com/';

  constructor(
    private http: HttpClient
  ) { }

  /*
    localStoarge will remain until
    user will not close the browser
    if user close tab then it will remian
  */
  setValue(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getValue(key: string) {
    return localStorage.getItem(key);
  }

  getUserDetails() {
    const url = `${this.apiUrl}users`;
    return this.http.get(url).pipe(
      map(res => {
        return res;
      })
    );
  }

  getComments() {
    const url = `${this.apiUrl}comments`;
    return this.http.get(url).pipe(
      map(res => {
        return res;
      })
    );
  }

}
