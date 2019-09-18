import { NgModule } from '@angular/core';
import { FeaturedPlaylistsRoutingModule } from './feature-playlists-routing.module';
import { FeaturedPlaylistsComponent } from './featured-playlists.component';

@NgModule({
  declarations: [
    FeaturedPlaylistsComponent
  ],
  imports: [
    FeaturedPlaylistsRoutingModule
  ]
})
export class FeaturedPlaylistsModule { }
