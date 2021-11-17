import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Content from '../partials/Home/Content';
import Footer from '../partials/Home/Footer';
import Search from '../partials/Home/Search';
import styled from 'styled-components';
import MovieDetail from '../partials/Home/MovieDetail';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  const queryParams = queryString.parse(useLocation().search);

  return (
    <HomeWrapper>
      {queryParams.movie ? (
        <MovieDetail movieId={queryParams.movie} />
      ) : (
        <Search />
      )}

      <Content />
      <Footer />
    </HomeWrapper>
  );
};

export default memo(Home);
