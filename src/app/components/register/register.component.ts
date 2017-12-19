import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication/authentication.service';
import { AlertService } from '../../services/alert/alert.service';

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthenticationService]
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;
  authResponse: any;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

    ngOnInit() {

    }

  register() {
      this.loading = true;
      this.authenticationService.register(this.model.email, this.model.password)
        .subscribe(
          data => {
            this.authResponse = data;
            alert(this.authResponse.message);
            if (this.authResponse.access_token) {
              this.router.navigate(['/dashboard']);
              this.alertService.success(this.authResponse.message);
            }
            else {
              this.alertService.error(this.authResponse.message);
              this.loading = false;
            }
         });
  }

}
