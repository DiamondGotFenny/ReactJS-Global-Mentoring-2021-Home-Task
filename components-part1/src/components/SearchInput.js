import React, { useEffect, useState, memo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { StyledSearchContainer } from '../styledComponents/Search';

const SearchInput = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const params = useParams();
  const handleSearch = () => {
    //first we get the query string from the input value, then we push it to the url
    if (query) {
      navigate(`/search/${query}`);
    } else {
      navigate(`/search`);
    }
  };

  //we check if the query string is in the url every time the component renders
  //if it is we set the query string to the query state
  useEffect(() => {
    if (params.searchQuery) {
      setQuery(params.searchQuery);
    }
  }, [params.searchQuery]);

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
      <button className="submit-search" onClick={handleSearch}>
        Search
      </button>
    </StyledSearchContainer>
  );
};

export default memo(SearchInput);
