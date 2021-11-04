import React, { memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
  const history = useNavigate();
  const queryParams = queryString.parse(useLocation().search);
  console.log(queryParams, 'queryParams');
  const renderTopComponent = () => {
    if (queryParams.movieId) {
      return <MovieDetail movieId={queryParams.movieId} />;
    }
    return <Search />;
  };
  return (
    <HomeWrapper>
      {renderTopComponent()}

      <Content />
      <Footer />
    </HomeWrapper>
  );
};

export default memo(Home);
