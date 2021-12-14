import React, { FC, useState, memo, useRef } from "react";
import { api } from "../../api";
import { Song } from "../../core/song";
import { usePauseAll } from "../../hooks/usePauseAll";
import styles from "./SongCard.module.css";

type SongCardProps = {
  song: Song;
};

type Status = "start" | "loading" | "success" | "error";

export const SongCard: FC<SongCardProps> = ({ song }) => {
  const [liked, setLiked] = useState(false);
  const [status, setStatus] = useState<Status>("start");

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pauseOthers = usePauseAll();

  const likeButtonDisabled = status === "loading" || status === "success";

  const likeSongHandler = () => {
    setStatus("loading");
    setLiked(true);

    api
      .likeSongById(song.id)
      .then(() => {
        setStatus("success");
        setLiked(true);
      })
      .catch(() => {
        setStatus("error");
        setLiked(false);
      });
  };

  const onStartHandler = (event: React.SyntheticEvent<HTMLAudioElement>) => {
    pauseOthers(event.currentTarget);
  };

  return (
    <li className={styles.item} tabIndex={0}>
      <img className={styles.cover} src={song.cover_image_path} />
      <h3 className={styles.songName}>{song.name}</h3>
      <span className={styles.likes}>Liked: {song.likes + Number(liked)}</span>
      <button
        className={styles.likeButton}
        disabled={likeButtonDisabled}
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
