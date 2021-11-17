import React, { useState } from 'react';
import styled from 'styled-components';
import ActiveMovieForm from './MovieModal';

const StyledMenu = styled.nav`
  display: ${({ open }) => (open ? 'inline-flex;' : 'none;')};
  flex-direction: column;
  justify-content: center;
  color: #fff;
  background: #effffa;
  transform: translate(4rem, -13rem);
  width: 190px;
  height: 111px;
  background: rgba(35, 35, 35, 0.918051);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1), 0px 2px 10px rgba(0, 0, 0, 0.1),
    0px 10px 20px rgba(0, 0, 0, 0.1), 0px 10px 50px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(27.1828px);
  border-radius: 4px;
  position: absolute;

  & button {
    color: #fff;
    height: 50%;
    background: transparent;
    border: none;
    &: hover {
      background: #f65261;
    }
  }
  & .close {
    display: inline-flex;
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
  }
  z-index: 10;
`;

const EditMenu = ({ open, setOpen, movie, movies, setMovies }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleDelete = (id) => {
    const newMovies = movies.filter((movie) => movie.id !== id);
    setMovies(newMovies);
  };
  return (
    <>
      <StyledMenu open={open}>
        <button className='close' onClick={() => setOpen(false)}>
          X
        </button>
        <button onClick={handleOpen}>Edit</button>
        <button onClick={() => handleDelete(movie.id)}>Delete</button>
      </StyledMenu>
      <ActiveMovieForm
        isOpen={isOpen}
        handleClose={handleClose}
        movie={movie}
      />
    </>
  );
};

export default EditMenu;
