import { Pipe, PipeTransform } from '@angular/core';
import { IPlaylist } from '../../services/featured-playlists/interfaces/playlist.interface';

@Pipe({
  name: 'playListsFilter',
  pure: false
})
export class PlaylistsFilterPipe implements PipeTransform {
  transform(playLists: Array<IPlaylist>, filter: string): Array<IPlaylist> | [] {
    if (!filter) {
      return playLists;
    }

    if (!playLists) {
      return [];
    }

    return playLists.filter((item) => {
      return this._filterByTitle(item, filter);
    });
  }

  private _filterByTitle(playList, filter): boolean {
    return playList.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
  }
}
