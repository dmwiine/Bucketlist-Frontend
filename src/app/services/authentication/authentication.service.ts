import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  url = 'http://localhost:5000/api/v1/auth/';
  headers = new Headers({'Content-Type': 'application/json'});
  options = new RequestOptions({'headers': this.headers});

  constructor(private http: Http) {
  }

  login(email: string, password: string) {
        return this.http.post(this.url + 'login/',
        JSON.stringify({ 'email': email, 'password': password }), this.options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                // alert(user.access_token);
                if (user && user.access_token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', user.access_token);
                }

                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    register(email: string, password: string) {
        return this.http.post(this.url + 'register/',
        JSON.stringify({ 'email': email, 'password': password }), this.options)
            .map((response: Response) => {
                let user = response.json();
                if (user && user.access_token) {
                    localStorage.setItem('currentUser', user.access_token);
                }
                return user;
            });
    }
}
