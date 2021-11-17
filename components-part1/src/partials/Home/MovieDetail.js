import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../../components/Logo';
import httpService from '../../services/httpService';

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
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = React.useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      console.log('movieId', movieId);
      try {
        const { data } = await httpService.get(`/movies/${movieId}`);
        setMovieDetails(data);
      } catch (error) {
        alert(error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);
  if (!movieDetails) {
    return <StyledMovieDetailWrapper>No Found</StyledMovieDetailWrapper>;
  }

  return (
    <StyledMovieDetailWrapper>
      <Logo />
      <button className="search-btn" onClick={() => navigate('/search')}>
        Search
      </button>
      <Image className="poster" src={movieDetails.poster_path} />
      <div className="info-container">
        <div className="col-1">
          <h2 className="title">{`${movieDetails.title}:${movieDetails.tagline}`}</h2>
          <p className="rating">{movieDetails.vote_average}</p>
        </div>

        <p className="genre">{movieDetails.genres.join(' ')}</p>
        <div className="col-2">
          <p className="release-date">{movieDetails.release_date}</p>
          <p className="runtime">{movieDetails.runtime} mints</p>
        </div>

        <p className="desc">{movieDetails.overview}</p>
      </div>
    </StyledMovieDetailWrapper>
  );
};

export default MovieDetail;
