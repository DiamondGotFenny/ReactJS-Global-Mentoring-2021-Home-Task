import {
  FETCH_MOVIESLIST_SUCCESS,
  FETCH_MOVIESLIST_LOADING,
  FETCH_MOVIESLIST_FAIL,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_DETAILS_LOADING,
  FETCH_MOVIE_DETAILS_FAIL,
  SORTING_BY_RATING,
  SORTING_BY_RELEASE_DATE,
  FILTER_BY_GENRE,
  DELETE_MOVIE_FROM_LIST,
} from '../constants/constantsVarables';
import httpService from '../services/httpService';
export const fetchMoviesList = (endpoint) => async (dispatch) => {
  if (!endpoint) return;
  try {
    dispatch({ type: FETCH_MOVIESLIST_LOADING, payload: null });
    const { data } = await httpService.get(endpoint);

    if (data) {
      dispatch({ type: FETCH_MOVIESLIST_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: FETCH_MOVIESLIST_FAIL, payload: error.message });
  }
};

export const fetchMovieDetails = (endpoint) => async (dispatch) => {
  if (!endpoint) return;
  if (endpoint.includes('search')) {
    dispatch({ type: FETCH_MOVIE_DETAILS_SUCCESS, payload: null });
  }
  try {
    dispatch({ type: FETCH_MOVIE_DETAILS_LOADING, payload: null });
    const { data } = await httpService.get(endpoint);
    if (data) {
      dispatch({ type: FETCH_MOVIE_DETAILS_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: FETCH_MOVIE_DETAILS_FAIL, payload: error.message });
  }
};

export const sortByRating = (movies) => (dispatch) => {
  const sortedMovies = movies.data.data.sort(
    (a, b) => b.vote_average - a.vote_average
  );
  console.log(sortedMovies, 'sortedMovies');
  dispatch({ type: SORTING_BY_RATING, payload: sortedMovies });
};

export const sortByReleaseDate = (movies) => (dispatch) => {
  const sortedMovies = movies.data.data.sort(
    (a, b) => Date.parse(b.release_date) - Date.parse(a.release_date)
  );
  dispatch({ type: SORTING_BY_RELEASE_DATE, payload: sortedMovies });
};

export const filterByGenre = (movies, genre) => (dispatch) => {
  if (genre === 'all') {
    console.log('all');
    dispatch({ type: FILTER_BY_GENRE, payload: movies.data.data });
    return;
  }
  const _filteredMovies = movies.data.data.filter((movie) =>
    movie.genres.includes(genre)
  );
  const filteredMovies = [..._filteredMovies];
  console.log(filteredMovies, 'filteredMovies');
  dispatch({ type: FILTER_BY_GENRE, payload: filteredMovies });
};

export const deleteMovie = (movieId) => (dispatch) => {
  dispatch({ type: DELETE_MOVIE_FROM_LIST, payload: movieId });
};
