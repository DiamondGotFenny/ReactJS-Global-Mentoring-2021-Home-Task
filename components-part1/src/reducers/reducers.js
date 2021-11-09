import { combineReducers } from 'redux';
import {
  FETCH_MOVIESLIST_SUCCESS,
  FETCH_MOVIESLIST_LOADING,
  FETCH_MOVIESLIST_FAIL,
  FETCH_MOVIE_DETAILS_SUCCESS,
  SORTING_BY_RATING,
  SORTING_BY_RELEASE_DATE,
  FILTER_BY_GENRE,
  DELETE_MOVIE_FROME_LIST,
} from '../constants/constantsVarables';

const moviesListReducer = (
  state = { status: 'loading', data: null },
  action
) => {
  switch (action.type) {
    case FETCH_MOVIESLIST_SUCCESS:
      return { status: 'success', data: action.payload };
    case FETCH_MOVIESLIST_LOADING:
      return { status: 'loading', data: null };
    case FETCH_MOVIESLIST_FAIL:
      return { status: 'fail', data: null };
    default:
      return state;
  }
};

const movieDetailsReducer = (
  state = { status: 'loading', data: null },
  action
) => {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS_SUCCESS:
      return { status: 'success', data: action.payload };
    case FETCH_MOVIESLIST_LOADING:
      return { status: 'loading', data: null };
    case FETCH_MOVIESLIST_FAIL:
      return { status: 'fail', data: null };
    default:
      return state;
  }
};

const sortingReducer = (state = {}, action) => {
  switch (action.type) {
    case SORTING_BY_RATING:
      return { ...state, data: action.payload };
    case SORTING_BY_RELEASE_DATE:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case FILTER_BY_GENRE:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
const deleteMovieReducer = (state = '', action) => {
  switch (action.type) {
    case DELETE_MOVIE_FROME_LIST:
      return action.payload;
    default:
      return state;
  }
};
const reduers = combineReducers({
  movies: moviesListReducer,
  movieDetails: movieDetailsReducer,
  sortedMovies: sortingReducer,
  filteredMovies: filterReducer,
  deletedMovie: deleteMovieReducer,
});
export default reduers;
