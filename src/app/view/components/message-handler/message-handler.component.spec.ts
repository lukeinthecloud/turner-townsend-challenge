import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MessageHandlerService } from '../../../services/message-handler/message-handler.service';

import { MessageHandlerComponent } from './message-handler.component';

describe('MessageHandlerComponent', () => {
  let component: MessageHandlerComponent;
  let fixture: ComponentFixture<MessageHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageHandlerComponent ],
      providers: [MessageHandlerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageHandlerComponent);
    component = fixture.componentInstance;
    
    component.displayedErrorMessage = {
      type: 'test',
      message: 'Hello World'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an alert with correct message', () => {
    const formElement = fixture.debugElement
      .query(By.css('.alert'));

    expect(formElement.nativeElement.textContent.trim()).toEqual('Hello World');
  });
});
