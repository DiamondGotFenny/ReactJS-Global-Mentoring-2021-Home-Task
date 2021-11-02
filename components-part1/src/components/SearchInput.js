import React, { useState, memo } from 'react';
import { StyledSearchContainer } from '../styledComponents/Search';
const SearchInput = () => {
  const [query, setQuery] = useState('');
  const handleSearch = () => {
    console.log(query);
  };

  return (
    <StyledSearchContainer>
      <input
        type="search"
        id="site-search"
        name="search-movie"
        aria-label="Search movie"
        placeholder="What do you want to watch?"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button onClick={handleSearch}>Search</button>
    </StyledSearchContainer>
  );
};

export default memo(SearchInput);
