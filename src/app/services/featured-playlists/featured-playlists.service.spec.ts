import { TestBed } from '@angular/core/testing';

import { CommunicationService } from '../communication/communication.service';
import { FeaturedPlaylistsService } from './featured-playlists.service';

describe('FeaturedPlaylistsService', () => {
  let _sut: FeaturedPlaylistsService;
  let communicationServiceSpy: jasmine.SpyObj<CommunicationService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CommunicationService', ['get']);

    TestBed.configureTestingModule({
      providers: [FeaturedPlaylistsService,
        {
          provide: CommunicationService, useValue: spy
        }]
    });

    _sut = TestBed.get(FeaturedPlaylistsService);
    communicationServiceSpy = TestBed.get(CommunicationService);
  });

  it('should be created', () => {
    const service: FeaturedPlaylistsService = TestBed.get(FeaturedPlaylistsService);
    expect(service).toBeTruthy();
  });

  it('should send a request for featured playlists and return featured playlist data', async () => {
    const expected = {
      data: 'resolved'
    };

    communicationServiceSpy.get.and.returnValue(Promise.resolve({
      data: 'resolved'
    }));

    const actual = await _sut.getFeaturedPlaylists();

    expect(communicationServiceSpy.get.calls.count()).toBe(1);
    expect(actual).toEqual(expected);
  });
});
