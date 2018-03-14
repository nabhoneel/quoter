import { Injectable } from '@angular/core';

@Injectable()
export class BackendService {
  path: String;
  constructor() {
      this.path = "";
  }

  getPath() {
      return this.path;
  }
}
