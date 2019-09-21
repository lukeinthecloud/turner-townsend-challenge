import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    spyOn(component.searchItemEmitter, 'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit when clicked with value', () => {
    component.searchFormGroup.controls.searchInput.setValue('test');
    const formElement = fixture.debugElement
      .query(By.css('form'));

    formElement.triggerEventHandler('ngSubmit', null);

    expect(component.searchItemEmitter.emit).toHaveBeenCalledWith('test');
  });

  it('should call the emitter with nothing', () => {
    component.searchFormGroup.controls.searchInput.setValue('test');
    const formElement = fixture.debugElement
      .query(By.css('.btn-outline-warning'));

    formElement.triggerEventHandler('click', null);

    expect(component.searchItemEmitter.emit).toHaveBeenCalledWith('');
  });
});
