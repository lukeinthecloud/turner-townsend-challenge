import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CommunicationService {
  constructor(private _http: HttpClient) {
  }

  public get<T>(url: string): Promise<T> {
    const request: any = this._http.get(url).toPromise();
    return request;
  }
}
