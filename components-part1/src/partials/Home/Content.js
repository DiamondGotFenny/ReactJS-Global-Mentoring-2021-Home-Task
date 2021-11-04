import React, { useState, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../../components/MovieCard';
import {
  SectionWrapper,
  FilterButton,
  FilterWrapper,
  SortSelect,
  SortSpan,
  SortWrapper,
  StyledResults,
  ContentWrapper,
} from '../../styledComponents/Content';
import {
  fetchMoviesList,
  filterByGenre,
  sortByRating,
  sortByReleaseDate,
} from '../../actions/moviesActions';

const Content = () => {
  const dispatch = useDispatch();
  const { movies, filteredMovies } = useSelector((state) => state);
  const [moviesList, setmoviesList] = useState([]);
  const handleGenreClick = (genre) => {
    dispatch(filterByGenre(movies, genre));
  };
  useEffect(() => {
    dispatch(fetchMoviesList('/movies'));
  }, []);
  useEffect(() => {
    if (movies.status === 'success') {
      setmoviesList(movies.data.data);
    }
    if (filteredMovies.data) {
      setmoviesList(filteredMovies.data);
    }
  }, [movies.status, filteredMovies.data]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    if (value === 'vote_average') {
      dispatch(sortByRating(movies));
    }
    if (value === 'release_date') {
      dispatch(sortByReleaseDate(movies));
    }
  };
  return (
    <SectionWrapper>
      <FilterWrapper>
        <ul>
          <li onClick={() => handleGenreClick('all')}>
            <FilterButton>all</FilterButton>
          </li>
          <li onClick={() => handleGenreClick('Drama')}>
            <FilterButton>Drama</FilterButton>
          </li>
          <li onClick={() => handleGenreClick('Comedy')}>
            <FilterButton>Comedy</FilterButton>
          </li>
          <li onClick={() => handleGenreClick('Adventure')}>
            <FilterButton>Adventure</FilterButton>
          </li>
          <li onClick={() => handleGenreClick('Action')}>
            <FilterButton>Action</FilterButton>
          </li>
        </ul>
        <SortWrapper>
          <SortSpan>Sort by</SortSpan>
          <SortSelect onChange={handleInputChange}>
            <option value="release_date">release date</option>
            <option value="vote_average">rating</option>
          </SortSelect>
        </SortWrapper>
      </FilterWrapper>
      <StyledResults>
        <span>{movies.data?.total}</span> movies found
      </StyledResults>
      <ContentWrapper>
        {moviesList.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default memo(Content);
