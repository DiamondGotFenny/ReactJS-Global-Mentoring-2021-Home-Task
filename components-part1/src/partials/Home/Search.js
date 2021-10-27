import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../components/Logo';
import {
  SearchWrapper,
  StyledHeader,
  StyledSearchTitle,
  StyledSearchContainer,
} from '../../styledComponents/Search';
import ActiveMovieForm from '../../components/MovieModal';

const Search = (props) => {
  return (
    <SearchWrapper>
      <StyledHeader>
        <Logo />
        <ActiveMovieForm movie={null} />
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
