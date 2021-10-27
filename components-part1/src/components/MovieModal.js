import React, { useState } from 'react';
import Modal, { ModalProvider } from 'styled-react-modal';
import { StyledAddMovieButton } from '../styledComponents/Search';
import MovieForm from './MovieForm';

const StyledModal = Modal.styled`
  width: 976px;
  height: 917px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #232323;
  color:#F65261;
  text-transform: uppercase;
`;

const ActiveMovieForm = ({ movie }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ModalProvider>
        <StyledAddMovieButton onClick={toggleModal}>
          {movie ? 'Edit' : '+ ADD MOVIE'}
        </StyledAddMovieButton>
        <StyledModal
          isOpen={isOpen}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
        >
          <MovieForm movie={movie} toggleModal={toggleModal} />
        </StyledModal>
      </ModalProvider>
    </div>
  );
};

export default ActiveMovieForm;
