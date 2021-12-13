export type SongId = string;

export type Song = {
  id: SongId;
  name: string;
  artistName: string;
  coverImagePath: string;
  liked: number;
};
