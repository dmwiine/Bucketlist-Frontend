import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication/authentication.service';
import { BucketlistService } from './services/bucketlist/bucketlist.service';
import { AlertService } from './services/alert/alert.service';
// import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  model: any = {};

  constructor(
    private authService: AuthenticationService,
    private bucketlistService: BucketlistService,
    private alertService: AlertService,
    // private dashboard: DashboardComponent
  ) { }
  // searchBucketlists() {
  //   this.dashboard.getPaginatedBuckets(this.dashboard.page, this.model.name);
  // }
}
