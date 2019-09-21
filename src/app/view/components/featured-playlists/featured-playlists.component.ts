import { Component, OnInit } from '@angular/core';
import { IMessage } from '../../../services/message-handler/interfaces/message.interface';
import { MessageHandlerService } from '../../../services/message-handler/message-handler.service';
import { FeaturedPlaylistsService } from '../../../services/featured-playlists/featured-playlists.service';
import { IPlaylist } from '../../../services/featured-playlists/interfaces/playlist.interface';
import { MessageTypes } from '../../../services/message-handler/message-types.enum';

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
    if (!eventData) {
      this._handleInvalidSearch();
    }

    this.searchItem = eventData;
  }

  private _handleInvalidSearch(): void {
    this._errorHandlerService.handle({
      type: MessageTypes.message,
      message: 'Invalid search please enter an input'
    });
  }
}
