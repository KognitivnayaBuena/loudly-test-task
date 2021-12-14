import { Song, SongId } from "../core/song";

const BASE_URL = "https://api-stg.jam-community.com";
const API_KEY = "apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8";

const fetchSongsList = async () => {
  const response = await fetch(`${BASE_URL}/song/trending`);

  if (response.ok) {
    const songs: Song[] = await response.json();
    return songs;
  } else {
    throw new Error("Something went wrong");
  }
};

const likeSongById = async (id: string) => {
  const url = `${BASE_URL}/interact/like?${API_KEY}`;

  const data = new URLSearchParams();
  data.append("id", id);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data,
  });

  if (response.ok) {
    const songs: Song[] = await response.json();
    return songs;
  } else {
    throw new Error("Something went wrong");
  }
};

export const api = {
  fetchSongsList,
  likeSongById,
};
