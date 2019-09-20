import { NgModule } from '@angular/core';
import { FeaturedPlaylistsService } from '../../../services/featured-playlists/featured-playlists.service';
import { FeaturedPlaylistsRoutingModule } from './feature-playlists-routing.module';
import { FeaturedPlaylistsComponent } from './featured-playlists.component';

@NgModule({
  declarations: [
    FeaturedPlaylistsComponent
  ],
  imports: [
    FeaturedPlaylistsRoutingModule
  ],
  providers: [
    FeaturedPlaylistsService
  ]
})
export class FeaturedPlaylistsModule { }
