import { Component } from '@angular/core';
import { EmitterService } from './services/emitter.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(
    private emitterSvc: EmitterService,
    private router: Router
  ) {
    this.emitterSvc.loginSuccess.subscribe((successLoginFlag: boolean) => {
      if (successLoginFlag) {
        this.router.navigate(['/master']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

}
