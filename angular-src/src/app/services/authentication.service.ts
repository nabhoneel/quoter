import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthenticationService {
  authToken: any;
  user: any;

  constructor(private http: Http) { }

  registerUser(user) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post(
          'api/register',
          user,
          {headers: headers}
      ).map(res => res.json());
  }

  authenticateUser(user) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post(
          'api/authenticate',
          user,
          {headers: headers}
      ).map(res => res.json());
  }

  storeData(token, user) {
      this.authToken = token;
      this.user = user;
      localStorage.setItem("id_token", token);
      localStorage.setItem("currentUser", JSON.stringify(user));
  }

  getDashboard() {
      let headers = new Headers();
      this.loadToken();
      headers.append('Authorization', this.authToken);
      headers.append('Content-type', 'application/json');
      let user = JSON.parse(localStorage.getItem('currentUser')).username.toString();
      return this.http.get('api/dashboard/' + user, {
          headers: headers
      }).map(res => res.json());
  }

  loadToken() {
      const token = localStorage.getItem("id_token");
      this.authToken = token;
  }

  loggedIn() {
      return tokenNotExpired('id_token');
  }

  logout() {
      this.authToken = null;
      this.user = null;
      localStorage.clear();
  }
}
