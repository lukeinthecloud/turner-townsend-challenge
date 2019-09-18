import { Component, OnInit } from '@angular/core';
import { FeaturedPlaylistsService } from '../../../services/featured-playlists/featured-playlists.service';

@Component({
  selector: 'app-featured-playlists',
  templateUrl: './featured-playlists.component.html',
  styleUrls: ['./featured-playlists.component.scss']
})
export class FeaturedPlaylistsComponent implements OnInit {
  constructor(private _featuredPlayListsService: FeaturedPlaylistsService) {
  }

  ngOnInit() {
    this._featuredPlayListsService.getFeaturedPlaylists();
  }
}
