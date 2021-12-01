import React from 'react';
import { Image } from 'react-bootstrap';
import router from 'next/router';
import styles from './MovieDetail.module.css';
import Logo from '../components/Logo';

const MovieDetail = ({ movie }) => {
  //if the movie is not found, redirect to 404 page
  if (!movie) {
    setTimeout(() => {
      router.push('/search');
    }, 3000);
    return (
      <div className={styles['movieDetails-Wrapper']}>
        <Logo />
        <button
          className={styles['search-btn']}
          onClick={() => router.push('/search')}
        >
          Search
        </button>
        <h1>Movie No Found </h1>
      </div>
    );
  }

  return (
    <div className={styles['movieDetails-Wrapper']}>
      <div className={styles['logo-container']}>
        <Logo />
      </div>
      <button
        className={styles['search-btn']}
        onClick={() => router.push('/search')}
      >
        Search
      </button>
      <Image className={styles.poster} src={movie.poster_path} fluid />
      <div className={styles['info-container']}>
        <div className={styles['col-1']}>
          <h2 className={styles.title}>{`${movie.title}:${movie.tagline}`}</h2>
          <p className={styles.rating}>{movie.vote_average}</p>
        </div>

        <p className={styles.genre}>{movie.genres.join(',')}</p>
        <div className={styles['col-2']}>
          <p className={styles['release-date']}>{movie.release_date}</p>
          <p className={styles.runtime}>{movie.runtime} mints</p>
        </div>

        <p className={styles.desc}>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
