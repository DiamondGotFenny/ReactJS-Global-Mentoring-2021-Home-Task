import React, { memo } from 'react';
import Content from '../partials/Home/Content';
import Footer from '../partials/Home/Footer';
import Search from '../partials/Home/Search';
import styled from 'styled-components';
import MovieDetail from '../partials/Home/MovieDetail';
import moviesContext from '../Context/moviesContext';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  const { selectedMovie } = React.useContext(moviesContext);
  console.log(selectedMovie, 'selected');
  const renderTopComponent = () => {
    if (selectedMovie) {
      return <MovieDetail />;
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
