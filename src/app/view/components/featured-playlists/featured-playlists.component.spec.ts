import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommunicationService } from '../../../services/communication/communication.service';
import { FeaturedPlaylistsService } from '../../../services/featured-playlists/featured-playlists.service';
import { MessageHandlerService } from '../../../services/message-handler/message-handler.service';
import { PlaylistsFilterPipe } from '../../../shared/filters/playlists-filter.pipe';
import { MessageHandlerComponent } from '../message-handler/message-handler.component';
import { SearchComponent } from '../search/search.component';
import { PlaylistPreviewComponent } from './components/playlist-preview/playlist-preview.component';
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
        PlaylistPreviewComponent
      ],
      imports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        FeaturedPlaylistsRoutingModule,
        ReactiveFormsModule
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
});
