import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { BucketlistService } from '../../services/bucketlist/bucketlist.service';
import { AlertService } from '../../services/alert/alert.service';
import { Bucketlist } from '../../models/bucketlist';
import { Item } from '../../models/item';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private bucketlists: Bucketlist[] = [];
  private pagination: any;
  private msg;
  selectedBucketlist: Bucketlist;
  noItems = true;
  limit = 5;
  page = 1;
  search = '';
  model: any = {};

  constructor(
    private authService: AuthenticationService,
    private bucketlistService: BucketlistService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.getPaginatedBuckets(this.page);
  }

  getBucketLists(page, search): void {
    this.bucketlistService.getBucketlist(page, this.limit, search)
    .subscribe(
      result => {
        console.log(result);
        let bucketlists = result.bucketists;
        let pagination = result.pagination;

        if (!bucketlists) {
          this.msg = 'No Bucketlists created!';
        }else {
          bucketlists.forEach(bucketlist => {
          let bucketlistObj = this.toBucketlist(bucketlist);
          this.bucketlists.push(bucketlistObj);
        },
        this.pagination = pagination,
        console.log(this.pagination)
      );
        }
      },
      error => {
                    this.alertService.error(error);
                });
      }

  bucketlistClick(bucketlist: Bucketlist): void {
    this.selectedBucketlist = bucketlist;
  }

  private deleteBucketlist(id: any): void {
    let response = this.bucketlistService.deleteBucketlist(id.toString());
    response.subscribe(
      result => {
        console.log(result);
        this.getBucketLists(this.page, this.search);
      },
      err => {
        console.log(err);
      }
    );
  }

  getPaginatedBuckets(page, search = '') {
    this.getBucketLists(page, search);
  }

  searchBucketlists() {

  }
  toBucketlist(result: any): Bucketlist {
    return <Bucketlist>({
      id: result.id,
      name: result.name,
      items: this.sendItems(result.items),
      date_created: <Date>result.date_created,
      date_modified: <Date>result.date_modified
    });
  }

  sendItems(items: any): Item[] {
    let items_array: Item[] = [];
    items.forEach(item => {
        items_array.push(this.toItem(item));
    });
    return items_array;
  }

  toItem(result: any): Item {
    return <Item>({
        id: result.id,
        name: result.name,
        done: result.done,
        date_modified: result.done,
        date_created: result.date_created
    });
}
}

