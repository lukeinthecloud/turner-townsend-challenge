import { NgModule } from '@angular/core';
import { PlaylistsRoutingModule } from './playlists-routing.module';
import { PlaylistsComponent } from './playlists.component';

@NgModule({
  declarations: [
    PlaylistsComponent
  ],
  imports: [
    PlaylistsRoutingModule
  ]
})
export class PlaylistsModule { }
