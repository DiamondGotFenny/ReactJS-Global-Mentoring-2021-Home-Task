import React, { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
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
  const { movieDetails } = useSelector((state) => state);
  const renderTopComponent = useMemo(() => {
    if (movieDetails.data) {
      return <MovieDetail />;
    }
    return <Search />;
  }, [movieDetails.data]);

  return (
    <HomeWrapper>
      {renderTopComponent}
      <Content />
      <Footer />
    </HomeWrapper>
  );
};

export default memo(Home);
