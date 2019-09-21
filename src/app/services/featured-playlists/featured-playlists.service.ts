import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CommunicationService } from '../communication/communication.service';
import { ErrorCodes } from '../message-handler/error-codes.enum';
import { MessageHandlerService } from '../message-handler/message-handler.service';
import { MessageTypes } from '../message-handler/message-types.enum';
import { IFeaturedPlayLists } from './interfaces/featured-play-lists.interface';
import { IPlaylist } from './interfaces/playlist.interface';

@Injectable()
export class FeaturedPlaylistsService {
  constructor(private _communicationService: CommunicationService,
              private _errorHandlerService: MessageHandlerService) {
  }

  public async getFeaturedPlaylists(): Promise<Array<IPlaylist> | []> {
    try {
      const response = await this._communicationService.get(environment.api_endpoint);
      return this._handleFeaturedPlaylistsResponse(response);
    } catch (error) {
      const message = `Error in getFeaturedPlaylists`;
      this._errorHandlerService.handle({
        message,
        error,
        type: MessageTypes.error,
        code: ErrorCodes.request
      });
      return [];
    }
  }

  private _handleFeaturedPlaylistsResponse(response: IFeaturedPlayLists): Array<IPlaylist | null> {
    if (!response.featuredPlaylists && !response.featuredPlaylists.content) {
      return [];
    }

    return [...response.featuredPlaylists.content];
  }
}
