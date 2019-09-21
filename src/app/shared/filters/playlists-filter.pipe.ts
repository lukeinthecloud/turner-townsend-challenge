import { Pipe, PipeTransform } from '@angular/core';
import { IPlaylist } from '../../services/featured-playlists/interfaces/playlist.interface';
import { MessageHandlerService } from '../../services/message-handler/message-handler.service';
import { MessageTypes } from '../../services/message-handler/message-types.enum';

@Pipe({
  name: 'playListsFilter',
  pure: false
})
export class PlaylistsFilterPipe implements PipeTransform {
  constructor(private _errorHandlerService: MessageHandlerService) {
  }

  transform(playLists: Array<IPlaylist>, filter: string): Array<IPlaylist> | [] {
    if (!filter) {
      return playLists;
    }

    if (!playLists) {
      const message = `No playlists available`;
      this._handleInvalidSearch(message);
      return [];
    }

    const filteredPlaylists = playLists.filter((item) => {
      return this._filterByTitle(item, filter);
    });

    if (!filteredPlaylists.length) {
      const message = `No results found for ${filter}`;
      this._handleInvalidSearch(message);
      return playLists;
    }

    return filteredPlaylists;
  }

  private _filterByTitle(playList: IPlaylist, filter: string): boolean {
    return playList.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
  }

  private _handleInvalidSearch(message: string): void {
    this._errorHandlerService.handle({
      type: MessageTypes.message,
      message
    });
  }
}
