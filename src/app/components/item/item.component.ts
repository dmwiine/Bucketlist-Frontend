import { Component, OnInit, Input } from '@angular/core';
import { Bucketlist } from '../../models/bucketlist';
import { ItemService } from '../../services/item/item.service';
import { AlertService } from '../../services/alert/alert.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() bucketlist: Bucketlist;
  noItems: boolean = true;
  private errMsg: string;

  constructor(
    private itemService: ItemService,
  private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  private deleteItem(itemID: number): void {
    if (confirm('Are you sure you want to delete this item? This action is irreversible.')) {
    let response: any = this.itemService.deleteItem(this.bucketlist.id, itemID);
    response.subscribe(
      response => {
        console.log(response);
      },
      error => {
                    this.alertService.error(response.message);
                });

  }
  }
}
