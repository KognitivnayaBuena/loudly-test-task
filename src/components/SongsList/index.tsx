import React, { FC } from "react";

import { Song } from "../../services/core/song";
import { SongCard } from "../SongCard";

type SongsListProps = {
  songs: Song[];
};

export const SongsList: FC<SongsListProps> = ({ songs }) => {
  return (
    <ul>
      {songs.map((song) => (
        <SongCard key={song.id} />
      ))}
    </ul>
  );
};
