import { FC } from "react";
import { useQuery } from "react-query";
import { api } from "../../api";
import { Song } from "../../core/song";
import styles from "./SongCard.module.css";

type SongCardProps = {
  song: Song;
};

export const SongCard: FC<SongCardProps> = ({ song }) => {
  const songData = new FormData();
  songData.append("id", song.id);
  // const { isLoading, error, data } =

  // if (isLoading) return "Loading...";

  // if (error) return "An error has occurred: " + error;

  const { isLoading, error, data, refetch } = useQuery(
    "repoData",
    () => {
      api.likeSongById(songData);
    },
    {
      manual: true,
    }
  );

  const likeSongHandler = () => {
    refetch();
  };

  return (
    <li className={styles.item}>
      <img className={styles.cover} src={song.cover_image_path} />
      <span className={styles.songName}>{song.name}</span>
      <button onClick={() => likeSongHandler()}>❤️</button>
      {/* <audio controls>
        <source src="horse.ogg" type="audio/ogg">
        <source src="horse.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio> */}
    </li>
  );
};
