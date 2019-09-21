import { Component, Input, OnInit } from '@angular/core';
import { IPlaylist } from '../../../../../services/featured-playlists/interfaces/playlist.interface';

@Component({
  selector: 'app-playlist-preview',
  templateUrl: './playlist-preview.component.html',
styleUrls: ['./playlist-preview.component.scss']
})
export class PlaylistPreviewComponent implements OnInit {
  @Input() public playListInfo: IPlaylist;

  constructor() { }

  ngOnInit() {
  }
}
