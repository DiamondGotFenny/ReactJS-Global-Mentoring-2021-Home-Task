import React from 'react';
import Logo from '../../components/Logo';
import {
  SearchWrapper,
  StyledHeader,
  StyledAddMovieButton,
  StyledSearchTitle,
  StyledSearchContainer,
} from '../../styledComponents/Search';

const Search = (props) => {
  return (
    <SearchWrapper>
      <StyledHeader>
        <Logo />
        <StyledAddMovieButton>+ ADD MOVIE</StyledAddMovieButton>
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

export default Search;
