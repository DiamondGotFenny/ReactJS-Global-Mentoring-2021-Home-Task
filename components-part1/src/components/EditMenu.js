import React, { useState, useContext, memo } from 'react';
import styled from 'styled-components';
import MovieModal from './MovieModal';
import moviesContext from '../Context/moviesContext';
import httpService from '../services/httpService';

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

const EditMenu = ({ open, setOpen, movie }) => {
  const { dispatch } = useContext(moviesContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClose = () => {
    setIsModalOpen(false);
  };
  const handleOpen = () => {
    setIsModalOpen(true);
  };
  const handleDelete = async (id) => {
    try {
      httpService.delete(`/movies/${id}`);
    } catch (error) {
      alert(error);
    }
    dispatch({ type: 'DELETE_MOVIE', payload: id });
  };
  const renderForm = React.useMemo(() => {
    return (
      <MovieModal
        isOpen={isModalOpen}
        handleClose={handleClose}
        movie={movie}
        dispatch={dispatch}
      />
    );
  }, [movie, isModalOpen, dispatch]);
  return (
    <>
      <StyledMenu open={open}>
        <button className="close" onClick={() => setOpen(false)}>
          X
        </button>
        <button onClick={handleOpen}>Edit</button>
        <button onClick={() => handleDelete(movie.id)}>Delete</button>
      </StyledMenu>
      {renderForm}
    </>
  );
};

export default memo(EditMenu);
