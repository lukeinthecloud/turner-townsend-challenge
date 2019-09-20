import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CommunicationService } from '../communication/communication.service';
import { IFeaturedPlayLists } from './interfaces/featured-play-lists';
import { IPlaylist } from './interfaces/playlist.interface';

@Injectable({
  providedIn: 'root'
})
export class FeaturedPlaylistsService {
  constructor(private _communicationService: CommunicationService) {
  }

  public async getFeaturedPlaylists(): Promise<Array<IPlaylist>> {
    const response = await this._communicationService.get<IFeaturedPlayLists>(environment.api_endpoint);
    return this._handleFeaturedPlaylistsResponse(response);
  }

  private _handleFeaturedPlaylistsResponse(response: IFeaturedPlayLists) {
    return response.content;
  }
}
