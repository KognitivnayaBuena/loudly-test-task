import { FC } from "react";
import { useQuery } from "react-query";
import { api } from "../../api";

import { SongsList } from "../../components/SongsList";

import { Song } from "../../core/song";

export const MainPage: FC = () => {
  const { isLoading, error, data } = useQuery(
    "get songs list",
    api.fetchSongsList
  );

  if (isLoading) return <p>"Loading..."</p>;

  if (error) return <p>"An error has occurred: " + error</p>;

  const isShowSongsList = data && data.length > 0 && !isLoading;

  return (
    <main>
      <h1>Songs</h1>
      {isShowSongsList && <SongsList songs={data} />}
    </main>
  );
};
