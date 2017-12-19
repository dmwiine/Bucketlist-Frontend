import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Bucketlist } from '../../../models/bucketlist';
import { Item } from '../../../models/item';
import { ItemService } from '../../../services/item/item.service';
import { closeModal } from '../../../services/modal';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  constructor(
    private itemService: ItemService
  ) { }
  private model: any = { };
  private errMsg: string;
  private item: Item;

  @Input() bucketlist: Bucketlist;
  @ViewChild('closeBtn') closeBtn: ElementRef;

  ngOnInit() {
  }

  private submitItem(): void {
    this.item = this.toItem(this.model);
    let response: any = this.itemService.createItem(this.bucketlist.id, this.item);
    response.subscribe(
      result => {
        closeModal(this.closeBtn);
      },
      err => {
        if (err.status === 400) {
          this.errMsg = 'Missing required parameters.';
        } else {
          this.errMsg = 'Server Error!';
        }
      }
    );
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
