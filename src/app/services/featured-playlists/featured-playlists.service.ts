import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CommunicationService } from '../communication/communication.service';

@Injectable({
  providedIn: 'root'
})
export class FeaturedPlaylistsService {
  constructor(private _communicationService: CommunicationService) {

  }

  public async getFeaturedPlaylists() {
    const response = await this._communicationService.get(environment.api_endpoint);
    return this._handleFeaturedPlaylistsResponse(response);
  }

  private _handleFeaturedPlaylistsResponse(response) {
    return response;
  }
}
