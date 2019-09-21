import { TestBed } from '@angular/core/testing';
import { PlaylistsFilterPipe } from './playlists-filter.pipe';

describe('PlaylistsFilterPipe', () => {
  const dummyPlaylist = {
    id: 'id',
    kind: 'kind',
    name: 'name',
    url: 'url',
    curator_name: 'curator_name',
    artwork: 'artwork'
  };

  const dummyPlaylistTwo = {
    id: 'id',
    kind: 'kind',
    name: 'test',
    url: 'url',
    curator_name: 'curator_name',
    artwork: 'artwork'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    _sut = new PlaylistsFilterPipe();
  });

  let _sut: PlaylistsFilterPipe;

  it('create an instance', () => {
    const pipe = new PlaylistsFilterPipe();
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    it('should return an empty array if no playlists given', () => {
      const expected = [];
      const actual = _sut.transform([], 'test');

      expect(actual).toEqual(expected);
    });

    it('should return playlists given if no filter string', () => {
      const expected = [dummyPlaylist];

      const actual = _sut.transform([dummyPlaylist], '');

      expect(actual).toEqual(expected);
    });

    it('should return results from name based on filter string', () => {
      const expected = [dummyPlaylistTwo];

      const actual = _sut.transform([dummyPlaylist, dummyPlaylistTwo], 'test');

      expect(actual).toEqual(expected);
    });
  });
});
