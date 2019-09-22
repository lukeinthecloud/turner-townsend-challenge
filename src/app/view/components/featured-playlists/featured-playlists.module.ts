import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeaturedPlaylistsService } from '../../../services/featured-playlists/featured-playlists.service';
import { PlaylistsFilterPipe } from '../../../shared/filters/playlists-filter.pipe';
import { MessageHandlerComponent } from '../message-handler/message-handler.component';
import { SearchComponent } from '../search/search.component';
import { FeaturedPlaylistsRoutingModule } from './feature-playlists-routing.module';
import { FeaturedPlaylistsComponent } from './featured-playlists.component';
import { PlaylistPreviewComponent } from './components/playlist-preview/playlist-preview.component';
import { PlaylistComponent } from './components/playlist/playlist.component';

@NgModule({
  declarations: [
    MessageHandlerComponent,
    PlaylistsFilterPipe,
    SearchComponent,
    FeaturedPlaylistsComponent,
    PlaylistPreviewComponent,
    PlaylistComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FeaturedPlaylistsRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    FeaturedPlaylistsService
  ]
})
export class FeaturedPlaylistsModule { }
