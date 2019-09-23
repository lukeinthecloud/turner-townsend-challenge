import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { CommunicationService } from '../../../services/communication/communication.service';
import { FeaturedPlaylistsService } from '../../../services/featured-playlists/featured-playlists.service';
import { MessageHandlerService } from '../../../services/message-handler/message-handler.service';
import { PlaylistsFilterPipe } from '../../../shared/filters/playlists-filter.pipe';
import { MessageHandlerComponent } from '../message-handler/message-handler.component';
import { SearchComponent } from '../search/search.component';
import { PlaylistPreviewComponent } from './components/playlist-preview/playlist-preview.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { FeaturedPlaylistsRoutingModule } from './feature-playlists-routing.module';

import { FeaturedPlaylistsComponent } from './featured-playlists.component';

describe('FeaturedPlaylistsComponent', () => {
  const playListPreviewSelectorString = '.playlist-preview-container';
  let component: FeaturedPlaylistsComponent;
  let fixture: ComponentFixture<FeaturedPlaylistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MessageHandlerComponent,
        PlaylistsFilterPipe,
        SearchComponent,
        FeaturedPlaylistsComponent,
        PlaylistPreviewComponent,
        PlaylistComponent
      ],
      imports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        FeaturedPlaylistsRoutingModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        FeaturedPlaylistsService,
        MessageHandlerService,
        CommunicationService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component, 'onSearchItemChange');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Note: This is more as an integration test as the services are already unit tested
  it('should fetch all playlists and render a list', (done) => {
    fixture
      .whenStable()
      .then(() => {
        fixture.detectChanges();
        const debugTaskTitle = fixture.debugElement.queryAll(By.css(playListPreviewSelectorString));
        expect(debugTaskTitle.length).toBeGreaterThan(0);
        done();
      });
  });

  it('should call onSearchItemChange with "test"', (done) => {
    const searchComponentDebugElement = fixture.debugElement.query(By.directive(SearchComponent));
    const formElement = searchComponentDebugElement.query(By.css('form'));
    fixture.detectChanges();

    searchComponentDebugElement.context.searchFormGroup.controls.searchInput.setValue('rap');

    formElement.triggerEventHandler('ngSubmit', null);
    fixture.detectChanges();

    fixture
      .whenStable()
      .then(() => {
        expect(component.onSearchItemChange).toHaveBeenCalledWith('rap');
        done();
      });
  });

  it('should call reset and return all playlists', (done) => {
    fixture.detectChanges();
    const searchComponentDebugElement = fixture.debugElement.query(By.directive(SearchComponent));
    const formElement = searchComponentDebugElement.query(By.css('form'));
    const resetButtonElement = fixture.debugElement.query(By.css('.btn-outline-warning'));

    searchComponentDebugElement.context.searchFormGroup.controls.searchInput.setValue('test');

    formElement.triggerEventHandler('ngSubmit', null);
    fixture.detectChanges();

    resetButtonElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    fixture
      .whenStable()
      .then(() => {
        fixture.detectChanges();
        expect(component.onSearchItemChange).toHaveBeenCalledWith('');
        done();
      });
  });
});
