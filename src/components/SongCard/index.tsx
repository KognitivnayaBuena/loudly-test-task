import { FC, useState, useEffect } from "react";
import { useQuery } from "react-query";
import { api } from "../../api";
import { Song } from "../../core/song";
import styles from "./SongCard.module.css";

type SongCardProps = {
  song: Song;
};

export const SongCard: FC<SongCardProps> = ({ song }) => {
  const [liked, setLiked] = useState(false);

  const songData = new FormData();
  songData.append("id", song.id);

  const { isLoading, error, data, refetch } = useQuery(
    "repoData",
    () => {
      api.likeSongById(songData);
    },
    {
      manual: true,
    }
  );

  useEffect(() => {
    if (error) {
      setLiked(false);
    }

    if (data) {
      setLiked(true);
    }

    if (isLoading) {
      setLiked(true);
    }
  }, [isLoading]);

  const likeSongHandler = () => {
    refetch();
  };

  if (isLoading) return <p>"Loading..."</p>;

  if (error) return <p>"An error has occurred: " + error</p>;

  return (
    <li className={styles.item} tabIndex={0}>
      <img className={styles.cover} src={song.cover_image_path} />
      <h3 className={styles.songName}>{song.name}</h3>
      <span className={styles.likes}>Liked: {song.likes + Number(liked)}</span>
      <button
        className={styles.likeButton}
        disabled={isLoading}
        onClick={() => likeSongHandler()}>
        Like
      </button>
      <audio
        className={styles.audio}
        controls
        src={song.music_file_path}
        type={song.music_file_mimetype}>
        Your browser does not support the audio element.
      </audio>
    </li>
  );
};
