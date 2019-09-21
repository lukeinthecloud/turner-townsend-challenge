import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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
    fixture.detectChanges();

    component.displayedErrorMessage = {
      type: 'test',
      message: 'Hello World'
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an alert with correct message', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    expect(component).toBeTruthy();
    const alertElement = bannerElement.querySelector('.alert');
    expect(alertElement.textContent).toEqual('Hello World');
  });
});
