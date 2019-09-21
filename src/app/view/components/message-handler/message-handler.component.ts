import { Component, Input, OnInit } from '@angular/core';
import { MessageHandlerService } from '../../../services/message-handler/message-handler.service';
import { IError } from '../../../services/message-handler/interfaces/message.interface';

@Component({
  selector: 'app-error',
  templateUrl: './message-handler.component.html',
  styleUrls: ['./message-handler.component.scss']
})
export class MessageHandlerComponent implements OnInit {
  @Input() externalErrorMessage: string;
  public displayedErrorMessage: IError;

  constructor(private _errorHandlerService: MessageHandlerService) {
  }

  ngOnInit() {
    this._errorHandlerService.subscribeToErrors(this._handlerErrorUpdate.bind(this));
  }

  private _handlerErrorUpdate(errorData: IError): void {
    console.error(errorData.error);
    this.displayedErrorMessage = errorData;
  }
}
