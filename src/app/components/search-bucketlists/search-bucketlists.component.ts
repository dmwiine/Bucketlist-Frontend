import { Component, OnInit } from '@angular/core';
// import { DashboardComponent } from '../../components/dashboard/dashboard.component';
// import { AuthenticationService } from '../../services/authentication/authentication.service';
import { BucketlistService } from '../../services/bucketlist/bucketlist.service';
import { AlertService } from '../../services/alert/alert.service';
import { Bucketlist } from '../../models/bucketlist';
import { Item } from '../../models/item';

@Component({
  selector: 'app-search-bucketlists',
  templateUrl: './search-bucketlists.component.html',
  styleUrls: ['./search-bucketlists.component.css']
})
export class SearchBucketlistsComponent implements OnInit {
  model: any = {};
  private bucketlists: Bucketlist[] = [];
  private pagination: any;
  limit = 5;
  page = 1;
  search = '';
  constructor(
    // private authService: AuthenticationService,
    private bucketlistService: BucketlistService,
    private alertService: AlertService,
    // private dashboard: DashboardComponent
  ) { }

  ngOnInit() {
  }

  searchBucketlists() {
    this.getBucketLists(this.page, this.model.name);
  }
  getBucketLists(page, search): void {
    this.bucketlistService.getBucketlist(page, this.limit, search)
    .subscribe(
      result => {
        console.log(result);
        let bucketlists = result.bucketists;
        let pagination = result.pagination;

        if (!bucketlists) {
          this.alertService.error('No Buckelists have been found.');
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
