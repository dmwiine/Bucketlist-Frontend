import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Bucketlist } from '../../models/bucketlist';

@Injectable()
export class BucketlistService {
  token = localStorage.getItem('currentUser');
  url = 'http://localhost:5000/api/v1/';
  headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token});
  options = new RequestOptions({'headers': this.headers});

  constructor(private http: Http) { }

  getBucketlist(page, limit, search): Observable<any> {
    //  alert(this.token);
    limit = limit || 10;
    page = page || 1;
    return this.http.get(this.url + 'bucketlists/' + '?page=' + page + '&limit=' + limit + '&q=' + search, this.options)
      .map(response => response.json());
      // .catch(handleError);
  }

  createBucketlist(name: string) {
        return this.http.post(this.url + 'bucketlists/',
        JSON.stringify({ 'name': name}), this.options)
            .map((response: Response) => {
                let bucketlist = response.json();
                return bucketlist;
            });
    }

  editBucketlist(body: Bucketlist) {
    let url: string = this.url + 'bucketlists/' + body.id;
    let bodyString: string = JSON.stringify(body);
    return this.http.put(url, bodyString, this.options)
      .map((response: Response) => response);
    //   .catch(handleError);
  }

  deleteBucketlist(id: string) {
    let url: string = this.url + 'bucketlists/' + id;
    return this.http.delete(url, this.options)
      .map((response: Response) => response);
    //   .catch(handleError);
  }
}
