import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeaturedPlaylistsService } from '../../../services/featured-playlists/featured-playlists.service';
import { PlaylistsFilterPipe } from '../../../shared/filters/playlists-filter.pipe';
import { SearchComponent } from '../search/search.component';
import { FeaturedPlaylistsRoutingModule } from './feature-playlists-routing.module';
import { FeaturedPlaylistsComponent } from './featured-playlists.component';
import { PlaylistPreviewComponent } from './components/playlist-preview/playlist-preview.component';

@NgModule({
  declarations: [
    PlaylistsFilterPipe,
    SearchComponent,
    FeaturedPlaylistsComponent,
    PlaylistPreviewComponent
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
