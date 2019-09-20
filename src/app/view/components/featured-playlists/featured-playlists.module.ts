import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeaturedPlaylistsService } from '../../../services/featured-playlists/featured-playlists.service';
import { FeaturedPlaylistsRoutingModule } from './feature-playlists-routing.module';
import { FeaturedPlaylistsComponent } from './featured-playlists.component';
import { PlaylistPreviewComponent } from './components/playlist-preview/playlist-preview.component';

@NgModule({
  declarations: [
    FeaturedPlaylistsComponent,
    PlaylistPreviewComponent
  ],
  imports: [
    FeaturedPlaylistsRoutingModule,
    CommonModule
  ],
  providers: [
    FeaturedPlaylistsService
  ]
})
export class FeaturedPlaylistsModule { }
