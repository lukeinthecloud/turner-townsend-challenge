import { TestBed } from '@angular/core/testing';

import { MessageHandlerService } from './message-handler.service';

describe('MessageHandler', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageHandlerService = TestBed.get(MessageHandlerService);
    expect(service).toBeTruthy();
  });
});
