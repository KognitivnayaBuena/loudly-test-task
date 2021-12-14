import { FC } from "react";
import { useQuery } from "react-query";
import { api } from "../../api";

import { SongsList } from "../../components/SongsList";

import { Song } from "../../core/song";

export const MainPage: FC = () => {
  // const { songs } = useSongsStorage();

  // console.log("songs", songs);

  const { isLoading, error, data } = useQuery(
    "get songs list",
    api.fetchSongsList
  );

  // const songs: Song[] = JSON.parse(data);
  console.log("data", data);

  return (
    <main>
      <h1> Songs List </h1>
      {isLoading && "isLoading..."}
      {data?.length > 0 && !isLoading && <SongsList songs={data} />}
    </main>
  );
};
