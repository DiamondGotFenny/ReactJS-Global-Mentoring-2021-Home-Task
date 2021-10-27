import React from 'react';
import { StyledMovieForm } from '../styledComponents/Search';
import Multiselect from 'multiselect-react-dropdown';
const MovieForm = ({ movie, toggleModal }) => {
  const genresOptions = [
    { label: 'Action', value: 'Action' },
    { label: 'Adventure', value: 'Adventure' },
    { label: 'Animation', value: 'Animation' },
    { label: 'Comedy', value: 'Comedy' },
    { label: 'Crime', value: 'Crime' },
    { label: 'Documentary', value: 'Documentary' },
  ];
  const [formData, setFormData] = React.useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    //submit data to server here
    console.log(formData);
    toggleModal();
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);
  const onSelect = (selectedList, selectedItem) => {
    console.log(selectedList);
    setFormData({ ...formData, genres: selectedList });
  };

  const onRemove = (selectedList, removedItem) => {
    console.log(selectedList);
    setFormData({ ...formData, genres: selectedList });
  };
  return (
    <div className="movie-form">
      <button onClick={toggleModal}>X</button>
      <h1>{movie ? 'Edit Movie' : 'Add Movie'}</h1>
      <StyledMovieForm className="container" onSubmit={handleSubmit}>
        <label className="title">
          Title:
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={movie.title}
          />
        </label>
        <label className="release-date">
          Release Date:
          <input
            type="date"
            name="release_date"
            onChange={handleChange}
            placeholder="Select Date"
            value={movie.release_date}
          />
        </label>
        <label className="movie-url">
          Movie Url:
          <input
            type="text"
            name="movie_url"
            onChange={handleChange}
            placeholder="htts://"
            value={movie.poster_path}
          />
        </label>
        <lable className="rating">
          Rating:
          <input
            type="text"
            name="rating"
            onChange={handleChange}
            value={movie.rating}
          />
        </lable>
        <label className="genre">
          Genre:
          <Multiselect
            options={genresOptions}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="label"
            placeholder="Select Genre"
          />
        </label>
        <label className="runtime">
          Runtime:
          <input
            type="text"
            name="runtime"
            onChange={handleChange}
            placeholder="minutes"
            value={movie.runtime}
          />
        </label>
        <div className="btn-group">
          <button type="submit" value="Submit">
            Submit
          </button>
          <button type="button">Reset</button>
        </div>
      </StyledMovieForm>
    </div>
  );
};

export default MovieForm;
