import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Bucketlist } from '../../models/bucketlist';
import { Item } from '../../models/item';

@Injectable()
export class ItemService {
  token = localStorage.getItem('currentUser');
  url = 'http://localhost:5000/api/v1/';
  headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token});
  options = new RequestOptions({'headers': this.headers});

  constructor(private http: Http) { }

  createItem(bucketlistID: number, body: Item) {
    let url: string = this.url + 'bucketlists/' + bucketlistID + '/items/';
    alert(url);
    let bodyString = JSON.stringify(body);
    alert(bodyString);
    return this.http.post(url, bodyString, this.options)
      .map((response: Response) => response);
      // .catch(handleError);
  }

  deleteItem(bucketlistID: number, itemID: number) {
    let url: string = this.url + 'bucketlists/' + bucketlistID + '/items/' + itemID;
    return this.http.delete(url, this.options)
      .map((response: Response) => response);
    //   .catch(handleError);
  }

  editItem(bucketlistID: number, itemID: number, body: Item) {
    let url: string = this.url + 'bucketlists/' + bucketlistID + '/items/' + itemID;
    let bodyString: string = JSON.stringify(body);
    return this.http.put(url, bodyString, this.options)
      .map((response: Response) => response);
      // .catch(handleError);
  }
}
