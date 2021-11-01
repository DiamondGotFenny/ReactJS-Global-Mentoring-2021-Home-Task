import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../components/Logo';
import {
  SearchWrapper,
  StyledHeader,
  StyledSearchTitle,
  StyledSearchContainer,
  StyledAddMovieButton,
} from '../../styledComponents/Search';
import ActiveMovieForm from '../../components/MovieModal';

const Search = ({ movies, setMovies }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <SearchWrapper>
      <StyledHeader>
        <Logo />

        <StyledAddMovieButton onClick={handleOpen}>
          + ADD MOVIE'
        </StyledAddMovieButton>
        <ActiveMovieForm
          isOpen={isOpen}
          handleClose={handleClose}
          movies={movies}
          setMovies={setMovies}
        />
      </StyledHeader>
      <StyledSearchTitle>FIND YOUR MOVIE</StyledSearchTitle>
      <StyledSearchContainer>
        <input
          type="search"
          id="site-search"
          name="search-movie"
          aria-label="Search movie"
          placeholder="What do you want to watch?"
        />
        <button>Search</button>
      </StyledSearchContainer>
    </SearchWrapper>
  );
};

Search.prototype = {
  query: PropTypes.string.isRequired,
};

export default Search;
