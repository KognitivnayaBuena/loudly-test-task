import { SongId } from "./song";

export type User = {
  id: string;
  name: string;
  likedSongs: SongId[];
};
