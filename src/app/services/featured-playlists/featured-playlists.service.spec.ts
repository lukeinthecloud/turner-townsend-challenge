import { TestBed } from '@angular/core/testing';

import { FeaturedPlaylistsService } from './featured-playlists.service';

describe('FeaturedPlaylistsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeaturedPlaylistsService = TestBed.get(FeaturedPlaylistsService);
    expect(service).toBeTruthy();
  });
});
