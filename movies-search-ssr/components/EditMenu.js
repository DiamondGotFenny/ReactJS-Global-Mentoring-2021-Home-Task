import React, { memo, useState } from 'react';

import httpService from '../services/httpService';
import styles from './EditMenu.module.css';

const EditMenu = ({ open, setOpen, movie }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClose = () => {
    setIsModalOpen(false);
  };
  const handleOpen = () => {
    setIsModalOpen(true);
  };
  const handleDelete = async (id) => {
    try {
      await httpService.delete(`/movies/${id}`);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <nav className={open ? styles.Editmenu : styles.hidden}>
        <button className="close" onClick={() => setOpen(false)}>
          X
        </button>
        <button onClick={handleOpen}>Edit</button>
        <button onClick={() => handleDelete(movie.id)}>Delete</button>
      </nav>
    </>
  );
};

export default EditMenu;
