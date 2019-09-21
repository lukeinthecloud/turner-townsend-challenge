import { Pipe, PipeTransform } from '@angular/core';
import { IPlaylist } from '../../services/featured-playlists/interfaces/playlist.interface';
import { IFilterMessage } from './interfaces/filter-message.interface';

@Pipe({
  name: 'playListsFilter',
  pure: false
})
export class PlaylistsFilterPipe implements PipeTransform {
  transform(playLists: Array<IPlaylist>, filter: string): Array<IPlaylist> | Array<IFilterMessage> {
    if (!filter) {
      return playLists;
    }

    if (!playLists) {
      return [{
        message: `No playlists available.`
      }];
    }

    const filteredPlaylists = playLists.filter((item) => {
      return this._filterByTitle(item, filter);
    });

    if (!filteredPlaylists.length) {
      return [{
        message: `No playlists matching ${filter}.`
      }];
    }

    return filteredPlaylists;
  }

  private _filterByTitle(playList: IPlaylist, filter: string): boolean {
    return playList.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
  }
}
