import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BucketlistService } from '../../services/bucketlist/bucketlist.service';
import { AlertService } from '../../services/alert/alert.service';

@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.css']
})
export class BucketlistComponent implements OnInit {
    model: any = {};
    returnUrl: string;
  constructor(
    private bucketlistService: BucketlistService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }
  createBucketlist() {
        this.bucketlistService.createBucketlist(this.model.name)
            .subscribe(
                data => {
                    this.router.navigate(['/dashboard']);
                },
                error => {
                    this.alertService.error(error);
                });
    }
}
