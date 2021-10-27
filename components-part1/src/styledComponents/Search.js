import styled from 'styled-components';

export const SearchWrapper = styled.section`
  height: 396px;
  width: 1260px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 1260px;
    height: 396px;
    z-index: -1;
    border-radius: 0px;
    background: url('/img/Search-top-bg.jpg') no-repeat center center fixed;
    background-size: cover;
    filter: blur(8.15485px);
    opacity: 0.8;
    mix-blend-mode: normal;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 1260px;
    height: 396px;
    background: linear-gradient(0deg, #000000, #000000);
    opacity: 0.6;
    z-index: -1;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const StyledAddMovieButton = styled.button`
  color: #f65261;
  height: 46px;
  width: 177px;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-right: 40px;
  padding: 11px 18px;
  border-radius: 4px;
  background: rgba(96, 96, 96, 0.68);
  border: none;
  text-transform: uppercase;
`;

export const StyledSearchTitle = styled.h1`
  color: #ffffff;
  height: 49px;
  width: 392px;
  font-family: Montserrat;
  font-size: 40px;
  font-style: normal;
  font-weight: 300;
  line-height: 49px;
  letter-spacing: 1px;
  text-align: center;
  margin-left: 178px;
`;

export const StyledSearchContainer = styled.div`
  margin-top: 40px;
  & input {
    color: #fff;
    height: 57px;
    width: 713px;
    border-radius: 4px;
    background: rgba(50, 50, 50, 0.8);
    mix-blend-mode: normal;
    opacity: 0.7;
    border-radius: 4px;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24.38px;
  }
  & button {
    color: #fff;
    background: #f65261;
    border-radius: 4px;
    padding: 18px 73px 15px 74px;

    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    text-align: center;
  }
`;

export const StyledMovieForm = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
  input {
    width: 100%;
  }
  .title {
    grid-area: title;
  }
  .release-date {
    grid-area: release-date;
  }
  .movie-url {
    grid-area: movie-url;
  }
  .rating {
    grid-area: rating;
  }
  .genre {
    grid-area: genre;
  }
  .runtime {
    grid-area: runtime;
  }

  .description {
    grid-area: description;
  }
  .btn-group {
    grid-area: btn-group;
  }
  grid-template-areas:
    'title title release-date'
    'movie-url movie-url rating'
    'genre genre runtime'
    'description description description'
    'btn-group btn-group btn-group';
`;

export const styledGenreDropdown = styled.div`
  width: 200px;
  border: 1px solid #aaa;
  padding: 10px;
  position: relative;
  margin: 0 auto;

  user-select: none;

  &::after {
    content: '';
    height: 0;
    position: absolute;
    width: 0;
    border: 6px solid transparent;
    border-top-color: #000;
    top: 50%;
    right: 10px;
    margin-top: -3px;
  }

  &.is-active::after {
    border-bottom-color: #000;
    border-top-color: #fff;
    margin-top: -9px;
  }
  .genres-dropdown-list {
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 100%; /* align the dropdown right below the dropdown text */
    border: inherit;
    border-top: none;
    left: -1px; /* align the dropdown to the left */
    right: -1px; /* align the dropdown to the right */
    opacity: 0; /* hide the dropdown */

    transition: opacity 0.4s ease-in-out;
    height: 100px;
    overflow: scroll;
    overflow-x: hidden;
    pointer-events: none; /* avoid mouse click events inside the dropdown */
  }
  .is-active .genres-dropdown-list {
    opacity: 1; /* display the dropdown */
    pointer-events: auto; /* make sure that the user still can select checkboxes */
  }

  .genres-dropdown-list li label {
    display: block;
    border-bottom: 1px solid silver;
    padding: 10px;

    transition: all 0.2s ease-out;
  }

  .genres-dropdown-list li label:hover {
    background-color: #555;
    color: white;
  }
`;
