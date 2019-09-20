import { Component, OnInit } from '@angular/core';
import { FeaturedPlaylistsService } from '../../../services/featured-playlists/featured-playlists.service';
import { IPlaylist } from '../../../services/featured-playlists/interfaces/playlist.interface';

@Component({
  selector: 'app-featured-playlists',
  templateUrl: './featured-playlists.component.html',
  styleUrls: ['./featured-playlists.component.scss']
})
export class FeaturedPlaylistsComponent implements OnInit {
  public featuredPlayLists: Array<IPlaylist | []>;

  constructor(private _featuredPlayListsService: FeaturedPlaylistsService) {
  }

  async ngOnInit() {
    this.featuredPlayLists = await this._featuredPlayListsService.getFeaturedPlaylists();
  }
}
