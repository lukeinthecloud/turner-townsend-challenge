import { Component, Input, OnInit } from '@angular/core';
import { MessageHandlerService } from '../../../services/message-handler/message-handler.service';
import { IMessage } from '../../../services/message-handler/interfaces/message.interface';
import { MessageTypes } from '../../../services/message-handler/message-types.enum';

@Component({
  selector: 'app-error',
  templateUrl: './message-handler.component.html',
  styleUrls: ['./message-handler.component.scss']
})
export class MessageHandlerComponent implements OnInit {
  @Input() externalErrorMessage: string;
  public displayedErrorMessage: IMessage;

  constructor(private _errorHandlerService: MessageHandlerService) {
  }

  ngOnInit() {
    this._errorHandlerService.subscribeToErrors(this._handlerErrorUpdate.bind(this));
  }

  private _handlerErrorUpdate(messageData: IMessage): void {
    this._logOutErrorData(messageData);
    this.displayedErrorMessage = messageData;
  }

  private _logOutErrorData(messageData: IMessage) {
    if (messageData.type === MessageTypes.error && messageData.error) {
      console.error(messageData.error);
    }
  }
}
