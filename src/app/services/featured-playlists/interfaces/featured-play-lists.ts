import { IPlaylist } from './playlist.interface';

export interface IFeaturedPlayLists {
  content: Array<IPlaylist | null>;
  name: string;
}
