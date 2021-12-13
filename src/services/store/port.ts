import { Song } from "../core/song";

export interface UseSongsService {
  songs: Song[];
  updateSongs(songs: Song[]): void;
  emptySongs(): void;
}
