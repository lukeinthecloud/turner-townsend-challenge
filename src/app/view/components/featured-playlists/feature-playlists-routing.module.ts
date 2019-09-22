import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { FeaturedPlaylistsComponent } from './featured-playlists.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturedPlaylistsComponent,
  },
  {
    path: 'view/:id', component: PlaylistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FeaturedPlaylistsRoutingModule {
}
