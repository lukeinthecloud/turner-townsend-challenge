import { IPlaylist } from './playlist.interface';

export interface IFeaturedPlayListsContent {
  content: Array<IPlaylist | null>;
  name: string;
}
