import { FC } from "react";

import { Song } from "../../core/song";
import { SongCard } from "../SongCard";

import styles from "./SongList.module.css";

type SongsListProps = {
  songs: Song[];
};

export const SongsList: FC<SongsListProps> = ({ songs }) => {
  return (
    <ul className={styles.list}>
      {songs.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </ul>
  );
};
