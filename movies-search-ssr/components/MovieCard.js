import React, { memo } from 'react';
import EditMenu from './EditMenu';
import router from 'next/router';
import styles from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
  const { title, poster_path, genres, release_date } = movie;
  const [open, setOpen] = React.useState(false);

  return (
    <div className={styles['movie-card']}>
      <button
        className={styles.menuButton}
        open={!open}
        onClick={() => setOpen(true)}
      >
        <div />
        <div />
        <div />
      </button>
      <EditMenu open={open} setOpen={setOpen} movie={movie} />
      <div
        className="click-container"
        onClick={() => router.push(`/search?movie=${movie.id}`)}
      >
        <img src={poster_path} alt={title} />
        <div className={styles.BasicInfoWrapper}>
          <title>{title}</title>
          <span>{release_date}</span>
        </div>
        <div className={styles.GenreWrapper}>{genres.join(',')}</div>
      </div>
    </div>
  );
};
export default memo(MovieCard);
