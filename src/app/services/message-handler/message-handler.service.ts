import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMessage } from './interfaces/message.interface';

@Injectable()
export class MessageHandlerService {
  private _messageSubject = new Subject();

  public subscribeToErrors(callback): void {
    this._messageSubject.subscribe(callback);
  }

  public handle(messageData: IMessage): void {
    this._messageSubject.next(messageData);
  }
}
