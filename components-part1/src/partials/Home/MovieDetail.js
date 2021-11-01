import React, { useState } from 'react';
import { Image } from 'react-bootstrap';

const MovieDetail = ({ movie, setSelectedMovie }) => {
  return (
    <div>
      <Image src={movie.poster_path} />
      <h2>{movie.title}</h2>
      <p>{movie.rating}</p>
      <p>{movie.genre}</p>
      <p>{movie.release_date}</p>
      <p>{movie.runtime}</p>
      <p>{movie.description}</p>
      <button onClick={() => setSelectedMovie(null)}>Search</button>
    </div>
  );
};

export default MovieDetail;
