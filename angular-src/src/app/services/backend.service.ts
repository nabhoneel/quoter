import { Injectable } from '@angular/core';

@Injectable()
export class BackendService {
  path: String;
  constructor() {
      this.path="";
      //this.path = "http://localhost:8080/";
  }

  getPath() {
      return this.path;
  }
}
