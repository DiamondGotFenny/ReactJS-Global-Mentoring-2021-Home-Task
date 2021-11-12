import React, { useEffect, useReducer } from 'react';
import { moviesList } from '../mockData/MoviesList';

const moviesContext = React.createContext(null);

const moviesReducer = (state, action) => {
  switch (action.type) {
    case 'INITIAL_MOVIES':
      return action.payload;
    case 'GET_MOVIES':
      return action.payload;
    case 'ADD_MOVIE':
      return [...state, action.payload];
    case 'UPDATE_MOVIE':
      return state.map((movie) =>
        movie.id === action.payload.id ? action.payload : movie
      );
    case 'DELETE_MOVIE':
      return state.filter((movie) => movie.id !== action.payload);
    default:
      return state;
  }
};
const movieReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_MOVIE':
      return action.payload;
    default:
      return state;
  }
};

export const MoviesContextProvide = ({ children }) => {
  const [movies, dispatch] = useReducer(moviesReducer, []);

  const [selectedMovie, selectedMovieDispatch] = useReducer(movieReducer, null);
  useEffect(() => {
    dispatch({ type: 'GET_MOVIES', payload: moviesList });
  }, []);
  console.log('context render');

  return (
    <moviesContext.Provider
      value={{
        movies,
        dispatch,
        selectedMovie,
        selectedMovieDispatch,
      }}
    >
      {children}
    </moviesContext.Provider>
  );
};

export default moviesContext;
