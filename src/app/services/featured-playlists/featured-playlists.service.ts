import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CommunicationService } from '../communication/communication.service';
import { ErrorHandlerService } from '../error/error-handler.service';
import { IFeaturedPlayLists } from './interfaces/featured-play-lists';
import { IPlaylist } from './interfaces/playlist.interface';

@Injectable()
export class FeaturedPlaylistsService {
  constructor(private _communicationService: CommunicationService,
              private _errorHandlerService: ErrorHandlerService) {
  }

  public async getFeaturedPlaylists(): Promise<Array<IPlaylist> | void> {
    try {
      const response = await this._communicationService.get(environment.api_endpoint);
      return this._handleFeaturedPlaylistsResponse(response);
    } catch (error) {
      this._errorHandlerService.handle(error);
    }
  }

  private _handleFeaturedPlaylistsResponse(response: IFeaturedPlayLists): Array<IPlaylist | null> {
    if (!response.content) {
      return [];
    }

    return [...response.content];
  }
}
