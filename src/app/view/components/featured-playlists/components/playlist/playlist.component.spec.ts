import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PlaylistComponent } from './playlist.component';

describe('PlaylistComponent', () => {
  let component: PlaylistComponent;
  let fixture: ComponentFixture<PlaylistComponent>;

  beforeEach(async(() => {
    const windowMock: Window = {} as any;
    TestBed.configureTestingModule({
      declarations: [PlaylistComponent],
      imports: [
        RouterTestingModule
      ],
      providers: [
        {
          provide: 'Window', useFactory: (() => {
            return windowMock;
          })
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    const dummyPlaylist = {
      id: 'id',
      kind: 'kind',
      name: 'name',
      url: 'url',
      curator_name: 'curator_name',
      artwork: 'artwork'
    };

    window.history.pushState({
      data: dummyPlaylist
    }, 'test');

    fixture = TestBed.createComponent(PlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
