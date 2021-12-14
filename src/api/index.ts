import { Song, SongId } from "../core/song";

const BASE_URL = "https://api-stg.jam-community.com";
const TOKEN = "___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8";

const fetchSongsList = async () => {
  const response = await fetch(`${BASE_URL}/song/trending`, {
    headers: { Authorization: TOKEN },
  });

  return response;

  // if (response.ok) {
  //   const songs: Song[] = await response.json();
  //   return songs;
  // } else {
  //   throw new Error("Something went wrong");
  // }
};

const likeSongById = async (songId: SongId) => {
  const response = await fetch(`${BASE_URL}/interact/like`, {
    method: "POST",
    headers: {
      Authorization: TOKEN,
    },
    body: JSON.stringify({
      id: songId,
    }),
  });

  if (response.ok) {
    return "Success";
  } else {
    throw new Error("Something went wrong");
  }
};

export const api = {
  fetchSongsList,
  likeSongById,
};
