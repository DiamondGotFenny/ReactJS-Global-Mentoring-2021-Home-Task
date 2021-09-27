import React from 'react';
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
import { moviesList } from '../../mockData/MoviesList';
const Content = () => {
  return (
    <SectionWrapper>
      <FilterWrapper>
        <ul>
          <li>
            <FilterButton>all</FilterButton>
          </li>
          <li>
            <FilterButton>Documentary</FilterButton>
          </li>
          <li>
            <FilterButton>Comedy</FilterButton>
          </li>
          <li>
            <FilterButton>Horror</FilterButton>
          </li>
          <li>
            <FilterButton>crime</FilterButton>
          </li>
        </ul>
        <SortWrapper>
          <SortSpan>Sort by</SortSpan>
          <SortSelect>
            <option>release date</option>
            <option>rating</option>
          </SortSelect>
        </SortWrapper>
      </FilterWrapper>
      <StyledResults>
        <span>39</span> movies found
      </StyledResults>
      <ContentWrapper>
        {moviesList.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default Content;
