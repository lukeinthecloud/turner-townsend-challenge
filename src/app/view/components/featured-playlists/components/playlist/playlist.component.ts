import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPlaylist } from '../../../../../services/featured-playlists/interfaces/playlist.interface';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  public playListInfo: IPlaylist;

  constructor(private _router: Router) {
  }

  ngOnInit() {
    this.playListInfo = window.history.state.data;

    if (!this.playListInfo) {
      this._router.navigate(['playlists']);
    }
  }
}
