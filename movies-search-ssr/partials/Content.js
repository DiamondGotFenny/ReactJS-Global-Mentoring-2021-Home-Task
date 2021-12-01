import React, { useEffect } from 'react';
import router, { useRouter } from 'next/router';
import searchObject from 'search-object';
import queryString from 'query-string';
import MovieCard from '../components/MovieCard';
import styles from './Content.module.css';

const Content = ({ movies }) => {
  const { query } = useRouter();
  const [moviesList, setmoviesList] = React.useState([]);
  const handleSortMovies = (movies, sortBy) => {
    if (!movies) return;
    if (sortBy === 'vote_average') {
      const sortedMovies = movies.sort(
        (a, b) => b.vote_average - a.vote_average
      );
      console.log(sortedMovies, 'vote_average');
      return sortedMovies;
    } else if (sortBy === 'release_date') {
      const sortedMovies = movies.sort(
        (a, b) => Date.parse(b.release_date) - Date.parse(a.release_date)
      );
      console.log(sortedMovies, 'release_date');
      return sortedMovies;
    }
  };

  const handleSearchQuery = (movies, query) => {
    const filteredMovies = movies
      .map((movie) => {
        if (searchObject(movie, query)) {
          return movie;
        }
      })
      .filter((item) => item !== undefined);
    return filteredMovies;
  };

  const handleGenreClick = (genre) => {
    if (genre === 'all') {
      setmoviesList(movies);
      router.push(`/search`);
      return;
    }

    const newQueryObj = { ...query, genre: genre };
    const newQueryStr = queryString.stringify(newQueryObj);
    router.push({ search: newQueryStr });
  };
  const handleInputChange = (e) => {
    const { value } = e.target;
    const newQueryObj = { ...query, sortBy: value };
    const newQueryStr = queryString.stringify(newQueryObj);
    router.push({ query: newQueryStr });
  };

  useEffect(() => {
    if (movies) setmoviesList(movies);
  }, [movies]);

  useEffect(() => {
    if (query.sortBy) {
      const sortedMovies = handleSortMovies(moviesList, query.sortBy);
      setmoviesList(sortedMovies);
    }
  }, [query.sortBy]);

  useEffect(() => {
    if (movies && !query.searchQuery) {
      setmoviesList(movies);
    }
    if (movies && query.searchQuery) {
      setmoviesList(handleSearchQuery(movies, query.searchQuery));
    }
  }, [movies, query.searchQuery]);

  useEffect(() => {
    if (movies && query.genre) {
      setmoviesList(handleSearchQuery(movies, query.genre));
    }
  }, [movies, query.genre]);

  return (
    <section className={styles.content}>
      <div className={styles.FilterWrapper}>
        <ul>
          <li onClick={() => handleGenreClick('all')}>
            <button className={styles.FilterButton}>all</button>
          </li>
          <li onClick={() => handleGenreClick('Drama')}>
            <button className={styles.FilterButton}>Drama</button>
          </li>
          <li onClick={() => handleGenreClick('Comedy')}>
            <button className={styles.FilterButton}>Comedy</button>
          </li>
          <li onClick={() => handleGenreClick('Adventure')}>
            <button className={styles.FilterButton}>Adventure</button>
          </li>
          <li data-testid="Action" onClick={() => handleGenreClick('Action')}>
            <button className={styles.FilterButton}>Action</button>
          </li>
        </ul>

        <div className={styles.SortWrapper}>
          <span className={styles.SortSpan}>Sort by</span>
          <select
            className={styles.SortSelect}
            onChange={handleInputChange}
            defaultValue="release_date"
          >
            <option value="release_date">release date</option>
            <option value="vote_average">rating</option>
          </select>
        </div>
      </div>
      <div className={styles['moviesList-counts']}>
        <span>{moviesList?.length > 0 ? moviesList.length : 0}</span>{' '}
        {moviesList?.length > 1 ? 'movies' : 'movie'} found
      </div>
      <div className={styles.ContentWrapper}>
        {!moviesList && <h2>Loading</h2>}
        {moviesList &&
          moviesList.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </section>
  );
};

export default Content;
