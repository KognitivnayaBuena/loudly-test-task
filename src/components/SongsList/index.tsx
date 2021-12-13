import React, { FC } from "react";

import { Song } from "../../core/song";

type SongsListProps = {
  songs: Song[];
};

export const SongsList: FC<SongsListProps> = ({ songs }) => {
  return (
    <ul>
      {songs.map((song) => (
        <li key={song.id}>{song.name}</li>
      ))}
    </ul>
  );
};
