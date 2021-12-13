import React, { useState, useContext } from "react";
import { Song } from "../core/song";

export type StoreType = {
  songs: Song[];
};

const initialSong = {
  id: "",
  name: "",
  artistName: "",
  coverImagePath: "",
  liked: 0,
};

const StoreContext = React.createContext<StoreType>({ songs: [initialSong] });

export const useStore = () => useContext(StoreContext);

export const Provider: React.FC = ({ children }) => {
  const [songs, setSongs] = useState<{ songs: Song[] }>({
    songs: [initialSong],
  });

  const value = {
    songs,
    updateSongs: setSongs,
    emptySongs: () => setSongs({ songs: [initialSong] }),
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
