import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
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
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // Note: I have done this more as an integration test as the services are already unit tested
  it('should fetch all playlists and render a list', (done) => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const debugTaskTitle = fixture.debugElement.queryAll(By.css('.playlist-container'));
      expect(debugTaskTitle.length).toBeGreaterThan(0);
      done();
    });
  });


  // it('should call onSearchItemChange', (done) => {
  //   const searchBarFixture = TestBed.createComponent(SearchComponent);
  //   const searchBarComponent = searchBarFixture.componentInstance;
  //
  //   searchBarComponent.searchFormGroup.controls.searchInput.setValue('test');
  //   const formElement = fixture.debugElement
  //     .query(By.css('form'));
  //
  //   formElement.triggerEventHandler('ngSubmit', null);
  //   fixture.detectChanges();
  //   searchBarFixture.detectChanges();
  //
  //   fixture.whenStable().then(() => {
  //     fixture.detectChanges();
  //     console.log(component.searchItem);
  //     done();
  //   });
  // });
});
