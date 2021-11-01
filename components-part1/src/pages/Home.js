import React, { useState, useEffect } from 'react';
import Content from '../partials/Home/Content';
import Footer from '../partials/Home/Footer';
import Search from '../partials/Home/Search';
import { moviesList } from '../mockData/MoviesList';
import styled from 'styled-components';
import MovieDetail from '../partials/Home/MovieDetail';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  const [movies, setMovies] = useState(moviesList);
  const [selectedMovie, setSelectedMovie] = useState(null);
  console.log(selectedMovie, 'selected');
  const renderTopComponent = () => {
    if (selectedMovie) {
      return (
        <MovieDetail
          movie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
      );
    }
    return <Search movies={movies} setMovies={setMovies} />;
  };

  return (
    <HomeWrapper>
      {renderTopComponent()}
      <Content
        movies={movies}
        setMovies={setMovies}
        setSelectedMovie={setSelectedMovie}
      />
      <Footer />
    </HomeWrapper>
  );
};

export default Home;
