import React, { useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from '../../actions/moviesActions';
import styled from 'styled-components';
import Logo from '../../components/Logo';

const StyledMovieDetailWrapper = styled.div`
  height: 396px;
  width: 1260px;
  display: grid;
  .logo-container {
    grid-area: logo;
    padding-top: 20px;
  }
  .search-btn {
    grid-area: search;
    background-color: transparent;
    border: none;
    outline: none;
    color: #f65261;
  }
  .poster {
    grid-area: poster;
    width: 220px;
    height: auto;
    transform: translateX(25%);
  }
  .info-container {
    grid-area: info;
    width: 780px;
    height: auto;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    .col-1,
    .col-2 {
      width: 100%;
      display: flex;
    }
    .rating {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      margin-left: 10px;
      border: 1px solid #fff;
      font-size: 18px;
      line-height: 35px;
    }
    .genre {
      text-align: left;
    }
    .runtime {
      margin-left: 10px;
    }
    .release-date,
    .runtime {
      color: #f65261;
    }
    .desc {
      margin-top: 10px;
      text-align: left;
    }
  }
  grid-template-areas:
    'logo . . search'
    'poster poster info info'
    'poster poster info info';
  margin: 0;
  background-color: #232323;
  color: #fff;
`;

const MovieDetail = ({ movieId }) => {
  const dispatch = useDispatch();
  const { movieDetails } = useSelector((state) => state);
  console.log(movieDetails, 'movieDetails');
  const {
    title,
    tagline,
    poster_path,
    genres,
    release_date,
    overview,
    runtime,
    vote_average,
  } = movieDetails.data;
  return (
    <StyledMovieDetailWrapper>
      <Logo />
      <button
        className="search-btn"
        onClick={() => dispatch(fetchMovieDetails(`search/}`))}
      >
        Search
      </button>
      <Image className="poster" src={poster_path} />
      <div className="info-container">
        <div className="col-1">
          <h2 className="title">{`${title}:${tagline}`}</h2>
          <p className="rating">{vote_average}</p>
        </div>

        <p className="genre">{genres.join(' ')}</p>
        <div className="col-2">
          <p className="release-date">{release_date}</p>
          <p className="runtime">{runtime} mints</p>
        </div>

        <p className="desc">{overview}</p>
      </div>
    </StyledMovieDetailWrapper>
  );
};

export default MovieDetail;
