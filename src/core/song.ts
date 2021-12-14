export type SongId = string;

export type Song = {
  id: SongId;
  name: string;
  music_file_path: string;
  music_file_mimetype: string;
  cover_image_path: string;
  likes: number;
};
