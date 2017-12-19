import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Bucketlist } from '../../../models/bucketlist';
import { Item } from '../../../models/item';
import { ItemService } from '../../../services/item/item.service';
import { closeModal } from '../../../services/modal';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  @Input() item: Item;
  @Input() bucketlistID: number;
  @ViewChild('closeItemEdit') closeBtn: ElementRef;
  private model: any = { };
  private errMsg: string;

  ngOnInit() {
    this.model = this.item;
  }
  private updateItem(): void {
    let response: any = this.itemService.editItem(this.bucketlistID, this.item.id, this.toItem(this.model));
    response.subscribe(
      result => {
        console.log(result);
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
