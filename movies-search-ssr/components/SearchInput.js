import React, { useEffect, useState, memo } from 'react';
import { useRouter } from 'next/router';
import styles from './SearchInput.module.css';

const SearchInput = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const { searchQuery } = router.query;
  const handleSearch = () => {
    //first we get the query string from the input value, then we push it to the url
    if (query) {
      router.push(`/search?searchQuery=${query}`);
    } else {
      router.push(`/search`);
    }
  };

  //we check if the query string is in the url every time the component renders
  //if it is we set the query string to the query state
  useEffect(() => {
    if (searchQuery) {
      setQuery(searchQuery);
    }
  }, [searchQuery]);

  return (
    <div className={styles.SearchBarContainer}>
      <input
        type="search"
        id="site-search"
        name="search-movie"
        aria-label="Search movie"
        placeholder="What do you want to watch?"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button className="submit-search" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default memo(SearchInput);
