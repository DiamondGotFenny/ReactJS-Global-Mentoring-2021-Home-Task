import React, { useState } from 'react';
import Content from '../partials/Home/Content';
import Footer from '../partials/Home/Footer';
import Search from '../partials/Home/Search';
import { moviesList } from '../mockData/MoviesList';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  const [movies, setMovies] = useState(moviesList);
  return (
    <HomeWrapper>
      <Search movies={movies} setMovies={setMovies} />
      <Content movies={movies} setMovies={setMovies} />
      <Footer />
    </HomeWrapper>
  );
};

export default Home;
