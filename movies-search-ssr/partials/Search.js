import React, { useState } from 'react';
import Logo from '../components/Logo';
import styles from './Search.module.css';

import SearchInput from '../components/SearchInput';

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <section className={styles.searchContainer}>
      <header className={styles.searchHeader}>
        <Logo />
        <button className={styles.AddMovieButton} onClick={handleOpen}>
          + ADD MOVIE'
        </button>
      </header>
      <h1 className={styles.SearchTitle}>FIND YOUR MOVIE</h1>
      <SearchInput />
    </section>
  );
};

export default Search;
