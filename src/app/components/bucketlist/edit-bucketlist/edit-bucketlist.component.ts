import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Bucketlist } from '../../../models/bucketlist';
import { BucketlistService } from '../../../services/bucketlist/bucketlist.service';
import { closeModal } from '../../../services/modal';

@Component({
  selector: 'app-edit-bucketlist',
  templateUrl: './edit-bucketlist.component.html',
  styleUrls: ['./edit-bucketlist.component.css']
})
export class EditBucketlistComponent implements OnInit {

  constructor(
    private bucketlistService: BucketlistService
  ) { }
  private model: any = { };
  private errMsg: string;
  @ViewChild('closeEdit') closeEdit: ElementRef;

  @Input() bucketlist: Bucketlist;

  ngOnInit() {
    this.model = this.bucketlist;
  }

  private updateBucketlist(): void {
    let response = this.bucketlistService.editBucketlist(this.model);
    response.subscribe(
      result => {
        closeModal(this.closeEdit);
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
}
