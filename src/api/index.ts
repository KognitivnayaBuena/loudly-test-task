import { Song, SongId } from "../core/song";

const BASE_URL = "https://api-stg.jam-community.com";
const API_KEY = "apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8";

const fetchSongsList = async () => {
  const response = await fetch(`${BASE_URL}/song/trending`);

  // return response;

  if (response.ok) {
    const songs: Song[] = await response.json();
    return songs;
  } else {
    throw new Error("Something went wrong");
  }
};

const likeSongById = async (songData: FormData) => {
  const url = `${BASE_URL}/interact/like/${API_KEY}`;
  // url.search = new URLSearchParams(TOKEN).toString();

  // const songData = new FormData();
  // songData.append("id", songId);

  console.log("songData", songData);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: songData,
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
