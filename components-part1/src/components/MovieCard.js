import React, { memo } from 'react';
import styled from 'styled-components';
import EditMenu from './EditMenu';
import { useDispatch } from 'react-redux';
import { fetchMovieDetails } from '../actions/moviesActions';
const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 323px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #ffffff;
  cursor: pointer;
  mix-blend-mode: normal;
  opacity: 0.7;
  margin: 26px;

  img {
    width: 323px;
  }

  &:hover .menuButton {
    display: flex;
  }
`;

const BasicInfoWrapper = styled.div`
  margin-top: 26px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  & title {
    display: flex;
  }
`;

const GenreWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  margin-top: 6px;
`;
const StyledDotsButton = styled.button`
  position: absolute;
  transform: translate(8rem, -15rem);
  display: none;
  width: 2rem;
  height: 2rem;
  flex-direction: column;
  justify-content: space-around;
  background: #2a202d;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0.3rem;
  z-index: 5;

  &:focus {
    outline: none;
  }

  div {
    width: 0.25rem;
    height: 0.25rem;
    background: #fff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    left: 0.6rem;
  }
`;
const MovieCard = ({ movie }) => {
  const { title, poster_path, genres, release_date } = movie;
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  return (
    <StyledCardContainer>
      <StyledDotsButton
        className="menuButton"
        open={!open}
        onClick={() => setOpen(true)}
      >
        <div />
        <div />
        <div />
      </StyledDotsButton>
      <EditMenu open={open} setOpen={setOpen} movie={movie} />
      <div onClick={() => dispatch(fetchMovieDetails(movie))}>
        <img src={poster_path} alt={title} />
        <BasicInfoWrapper>
          <title>{title}</title>
          <span>{release_date}</span>
        </BasicInfoWrapper>
        <GenreWrapper>{genres.join(',')}</GenreWrapper>
      </div>
    </StyledCardContainer>
  );
};
export default memo(MovieCard);
