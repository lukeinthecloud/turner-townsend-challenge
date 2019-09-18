import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedPlaylistsComponent } from './featured-playlists.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturedPlaylistsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FeaturedPlaylistsRoutingModule {
}
