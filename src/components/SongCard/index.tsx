import React, { FC } from "react";
import styles from "./SongCard.module.css";

type SongCardProps = {
  key: string;
};

export const SongCard: FC<SongCardProps> = ({ key }) => {
  return (
    <li key={key} className={styles.item}>
      tef
    </li>
  );
};
