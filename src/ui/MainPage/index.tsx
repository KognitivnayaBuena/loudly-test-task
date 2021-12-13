import { FC } from "react";

import { SongsList } from "../../components/SongsList";

import { Song } from "../../core/song";
import { useSongsStorage } from "../../services/store/songsUdapter";

const mockSongsList: Song[] = [
  {
    id: "0",
    name: "Pizza",
    artistName: "artistName - 0",
    coverImagePath: "",
    liked: 1,
  },
  {
    id: "1",
    name: "Imagine Dragons",
    artistName: "artistName - 1",
    coverImagePath: "",
    liked: 10,
  },
  {
    id: "2",
    name: "Elvis Presley",
    artistName: "artistName - 2",
    coverImagePath: "",
    liked: 0,
  },
  {
    id: "3",
    name: "Pilot",
    artistName: "artistName - 3",
    coverImagePath: "",
    liked: 4,
  },
];

export const MainPage: FC = () => {
  const { songs } = useSongsStorage();

  console.log("songs", songs);

  return (
    <main>
      <h1> Songs List </h1>
      <SongsList songs={mockSongsList} />
    </main>
  );
};
