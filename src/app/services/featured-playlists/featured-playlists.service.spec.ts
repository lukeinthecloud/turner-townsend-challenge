import { TestBed } from '@angular/core/testing';

import { CommunicationService } from '../communication/communication.service';
import { ErrorHandlerService } from '../error/error-handler.service';
import { FeaturedPlaylistsService } from './featured-playlists.service';

describe('FeaturedPlaylistsService', () => {
  const fakeResult = {
    id: 'id',
    kind: 'kind',
    name: 'name',
    url: 'url',
    curator_name: 'curator_name',
    artwork: 'artwork'
  };

  let _sut: FeaturedPlaylistsService;
  let communicationServiceSpy: jasmine.SpyObj<CommunicationService>;
  let errorHandlerServiceSpy: jasmine.SpyObj<ErrorHandlerService>;

  beforeEach(() => {
    const communicationServiceGetSpy = jasmine.createSpyObj('CommunicationService', ['get']);
    const errorHandlerServiceHandleSpy = jasmine.createSpyObj('ErrorHandlerService', ['handle']);

    TestBed.configureTestingModule({
      providers: [
        FeaturedPlaylistsService,
        {
          provide: CommunicationService, useValue: communicationServiceGetSpy
        },
        ErrorHandlerService,
        {
          provide: ErrorHandlerService, useValue: errorHandlerServiceHandleSpy
        }
      ]
    });

    _sut = TestBed.get(FeaturedPlaylistsService);
    communicationServiceSpy = TestBed.get(CommunicationService);
    errorHandlerServiceSpy = TestBed.get(ErrorHandlerService);
  });

  it('should be created', () => {
    const service: FeaturedPlaylistsService = TestBed.get(FeaturedPlaylistsService);
    expect(service).toBeTruthy();
  });

  it('should send a request for featured playlists and return featured playlist data', async () => {
    const expected = [fakeResult];

    communicationServiceSpy.get.and.returnValue(Promise.resolve({
      featuredPlaylists: {
        content: [fakeResult],
        name: 'Response'
      }
    }));

    const actual = await _sut.getFeaturedPlaylists();

    expect(communicationServiceSpy.get.calls.count()).toBe(1);
    expect(actual).toEqual(expected);
  });

  it('should send the error onto the error handler service', async () => {
    const expected = {
      message: 'There was an error'
    };

    communicationServiceSpy.get.and.returnValue(Promise.reject({
      message: 'There was an error'
    }));

    await _sut.getFeaturedPlaylists();

    expect(errorHandlerServiceSpy.handle.calls.count()).toBe(1);
    expect(errorHandlerServiceSpy.handle.calls.first().args[0]).toEqual(expected);
  });

  it('should return an empty array if there is no featuredPlaylists', async () => {
    const expected = [];

    communicationServiceSpy.get.and.returnValue(Promise.reject({}));

    const actual = await _sut.getFeaturedPlaylists();

    expect(communicationServiceSpy.get.calls.count()).toBe(1);
    expect(actual).toEqual(expected);
  });
});
