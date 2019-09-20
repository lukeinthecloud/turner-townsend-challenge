import { Injectable } from '@angular/core';

@Injectable()
export class ErrorHandlerService {
  constructor() {
  }

  public handle(error) {
    console.log(error);
  }
}
