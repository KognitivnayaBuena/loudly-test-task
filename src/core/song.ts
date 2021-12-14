export type SongId = string;

export type Song = {
  id: SongId;
  name: string;
  description: string;
  artist_name: string;
  cover_image_path: string;
  liked: number;
};
