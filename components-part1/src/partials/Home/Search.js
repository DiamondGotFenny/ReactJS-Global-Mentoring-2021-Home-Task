import React, { useState, memo } from 'react';
import Logo from '../../components/Logo';

import {
  SearchWrapper,
  StyledHeader,
  StyledSearchTitle,
  StyledAddMovieButton,
} from '../../styledComponents/Search';
import MovieModal from '../../components/MovieModal';
import SearchInput from '../../components/SearchInput';

const Search = () => {
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
        <MovieModal isOpen={isOpen} handleClose={handleClose} movie={null} />
      </StyledHeader>
      <StyledSearchTitle>FIND YOUR MOVIE</StyledSearchTitle>
      <SearchInput />
    </SearchWrapper>
  );
};

export default memo(Search);
