import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PlaylistPreviewComponent } from './playlist-preview.component';

describe('PlaylistPreviewComponent', () => {
  let component: PlaylistPreviewComponent;
  let fixture: ComponentFixture<PlaylistPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistPreviewComponent],
      imports: [
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set all the data within a playlist', () => {
    component.playListInfo = {
      id: 'id',
      name: 'name',
      artwork: 'someurl.com',
      url: 'someurl.com',
      curator_name: 'curator_name',
      kind: 'kind'
    };

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const imageElement = compiled.querySelector('img').src;
    const nameElement = compiled.querySelector('.playlist-container__title');
    const buttonElement = compiled.querySelector('.btn-primary').href;

    expect(imageElement).toContain('someurl.com');
    expect(nameElement.textContent).toEqual('name');
    expect(buttonElement).toContain('someurl.com');
  });
});
