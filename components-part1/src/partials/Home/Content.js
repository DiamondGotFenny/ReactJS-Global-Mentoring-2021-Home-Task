import React, { useState, memo, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import searchObject from 'search-object';
import queryString from 'query-string';
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
import httpService from '../../services/httpService';

const Content = () => {
  const params = useParams();
  const queryStr = useLocation().search;
  const queryObj = queryString.parse(queryStr);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const deletedMovie = useSelector((state) => state.deletedMovie);
  console.log(deletedMovie, 'deletedMovie');
  const [moviesList, setmoviesList] = useState([]);
  //this is the original list of movies
  const [movies, setMovies] = useState(null);

  const handleSortMovies = (movies, sortBy) => {
    if (sortBy === 'vote_average') {
      const sortedMovies = movies.sort(
        (a, b) => b.vote_average - a.vote_average
      );
      return sortedMovies;
    } else if (sortBy === 'release_date') {
      const sortedMovies = movies.sort(
        (a, b) => Date.parse(b.release_date) - Date.parse(a.release_date)
      );
      return sortedMovies;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await httpService.get('/movies');
        setMovies(data);
        setmoviesList(data.data);
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, []);
  console.log(movies, 'movies');
  useEffect(() => {
    if (queryObj.sortBy) {
      const sortedMovies = handleSortMovies(moviesList, queryObj.sortBy);
      setmoviesList(sortedMovies);
    }
  }, [queryObj.sortBy]);

  useEffect(() => {
    if (movies && !queryObj.searchQuery) {
      setmoviesList(movies.data);
    }
    if (movies && params.searchQuery) {
      setmoviesList(handleSearchQuery(movies.data, params.searchQuery));
    }
  }, [movies, params.searchQuery]);

  useEffect(() => {
    if (movies && queryObj.genre) {
      setmoviesList(handleSearchQuery(movies.data, queryObj.genre));
    }
  }, [movies, queryObj.genre]);

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
      setmoviesList(movies.data);
      navigate(`${pathname}`);
      return;
    }

    const newQueryObj = { ...queryObj, genre: genre };
    const newQueryStr = queryString.stringify(newQueryObj);
    navigate({ search: newQueryStr });
  };
  const handleInputChange = (e) => {
    const { value } = e.target;
    const newQueryObj = { ...queryObj, sortBy: value };
    const newQueryStr = queryString.stringify(newQueryObj);
    navigate({ search: newQueryStr });
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
          <SortSelect onChange={handleInputChange} defaultValue="release_date">
            <option value="release_date">release date</option>
            <option value="vote_average">rating</option>
          </SortSelect>
        </SortWrapper>
      </FilterWrapper>
      <StyledResults>
        <span>{moviesList.length > 0 ? moviesList.length : 0}</span> movies
        found
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
