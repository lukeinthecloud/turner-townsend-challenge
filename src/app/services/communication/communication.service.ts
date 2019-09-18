import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CommunicationService {
  constructor(private _http: HttpClient) {
  }

  public get(url: string) {
    return this._http.get(url).toPromise();
  }
}
