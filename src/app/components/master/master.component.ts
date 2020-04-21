import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  constructor(
    private loginSvc: LoginService
  ) { }

  ngOnInit() { }

  logOutClicked() {
    this.loginSvc.clearStoredData();
  }

}
