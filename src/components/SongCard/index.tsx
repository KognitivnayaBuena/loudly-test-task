import React, { FC, useState, useEffect, memo, useRef } from "react";
import { useQuery } from "react-query";
import { api } from "../../api";
import { Song } from "../../core/song";
import { usePauseAll } from "../../hooks/usePauseAll";
import styles from "./SongCard.module.css";

type SongCardProps = {
  song: Song;
};

type Status = "loading" | "success" | "error";

export const SongCard: FC<SongCardProps> = ({ song }) => {
  const [liked, setLiked] = useState(false);
  const [status, setStatus] = useState<Status>("success");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pauseOthers = usePauseAll();

  // const { isLoading, error, data, refetch } = useQuery(
  //   "repoData",
  //   () => {
  //     api.likeSongById(song.id);
  //   },
  //   {
  //     manual: true,
  //   }
  // );

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
  }, [status]);

  const likeSongHandler = () => {
    api.likeSongById(song.id).then(() => {});
    // refetch();
  };

  const onStartHandler = (event: React.SyntheticEvent<HTMLAudioElement>) => {
    pauseOthers(event.currentTarget);
  };

  // if (isLoading) return <p>"Loading..."</p>;

  // if (error) return <p>"An error has occurred: " + error</p>;

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
        ref={audioRef}
        className={styles.audio}
        controls
        onPlay={onStartHandler}
        src={song.music_file_path}
        type={song.music_file_mimetype}>
        Your browser does not support the audio element.
      </audio>
    </li>
  );
};

export const MemoizedSongCard = memo(SongCard);
