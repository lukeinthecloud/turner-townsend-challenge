import { Component, OnInit } from '@angular/core';
import { MessageHandlerService } from '../../../services/message-handler/message-handler.service';
import { FeaturedPlaylistsService } from '../../../services/featured-playlists/featured-playlists.service';
import { IPlaylist } from '../../../services/featured-playlists/interfaces/playlist.interface';

@Component({
  selector: 'app-featured-playlists',
  templateUrl: './featured-playlists.component.html',
  styleUrls: ['./featured-playlists.component.scss']
})
export class FeaturedPlaylistsComponent implements OnInit {
  public featuredPlayLists: Array<IPlaylist> | [];
  public searchItem: string;

  constructor(private _featuredPlayListsService: FeaturedPlaylistsService,
              private _errorHandlerService: MessageHandlerService) {

  }

  async ngOnInit() {
    this.featuredPlayLists = await this._featuredPlayListsService.getFeaturedPlaylists();
  }

  public onSearchItemChange(eventData): void {
    this._errorHandlerService.handle({
      code: 1,
      message: 'test',
      error: null
    });

    this.searchItem = eventData;
  }
}
