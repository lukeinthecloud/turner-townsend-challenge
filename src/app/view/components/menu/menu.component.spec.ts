import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a home button', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const navbarHomeElement = bannerElement.querySelector('.navbar-brand');
    const href = navbarHomeElement.getAttribute('href');

    expect(navbarHomeElement.textContent).toEqual('Playlist Searcher');
    expect(href).toEqual('/');
  });

  it('should have a playlists link', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const playListsLinkElement = bannerElement.querySelector('.nav-link');
    const href = playListsLinkElement.getAttribute('href');

    expect(playListsLinkElement.textContent).toEqual('PlayLists');
    expect(href).toEqual('/playlists');
  });
});
