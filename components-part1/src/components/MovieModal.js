import React, { useRef, useState, memo } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Multiselect from 'multiselect-react-dropdown';

const genresOptions = [
  { label: 'Action', value: 'Action' },
  { label: 'Adventure', value: 'Adventure' },
  { label: 'Animation', value: 'Animation' },
  { label: 'Comedy', value: 'Comedy' },
  { label: 'Crime', value: 'Crime' },
  { label: 'Documentary', value: 'Documentary' },
];
const ActiveMovieForm = ({ isOpen, handleClose, movie, dispatch }) => {
  const [formData, setFormData] = useState({});
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    //submit data to server here
    //we don't acutally need to use dispatch here in real scenario
    console.log(formData);
    if (movie) {
      dispatch({
        type: 'UPDATE_MOVIE',
        payload: {
          ...formData,
          id: movie.id,
        },
      });
    } else {
      dispatch({
        type: 'ADD_MOVIE',
        payload: formData,
      });
    }
    handleClose();
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSelect = (selectedList, selectedItem) => {
    console.log(selectedList);
    setFormData({ ...formData, genres: selectedList });
  };

  const onRemove = (selectedList, removedItem) => {
    console.log(selectedList);
    setFormData({ ...formData, genres: selectedList });
  };
  const handleFormRest = () => {
    formRef.current.reset();
    setFormData({});
  };
  console.log('modal render');
  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{movie ? 'Edit Movie' : 'Add Movie'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Form.Group className="title" controlId="title">
            <Form.Label>
              <span className="required">Title:</span>：
            </Form.Label>
            <Form.Control
              type="text"
              name="title"
              aria-describedby="title"
              placeholder="Movie Title"
              onChange={handleChange}
              defaultValue={movie?.title}
            />
          </Form.Group>
          <Form.Group className="release-date" controlId="release-date">
            <Form.Label>
              <span className="required">Release Date:</span>：
            </Form.Label>
            <Form.Control
              type="date"
              name="release-date"
              aria-describedby="release-date"
              placeholder="Select Date"
              onChange={handleChange}
              defaultValue={movie?.release_date}
            />
          </Form.Group>
          <Form.Group className="movie-url" controlId="movie-url">
            <Form.Label>
              <span className="required">Movie Url:</span>：
            </Form.Label>
            <Form.Control
              type="text"
              name="movie-url"
              aria-describedby="movie-url"
              placeholder="htts://"
              onChange={handleChange}
              defaultValue={movie?.poster_path}
            />
          </Form.Group>
          <Form.Group className="rating" controlId="rating">
            <Form.Label>
              <span className="required">Rating:</span>：
            </Form.Label>
            <Form.Control
              type="text"
              name="rating"
              aria-describedby="rating"
              placeholder="7.8"
              onChange={handleChange}
              defaultValue={movie?.rating}
            />
          </Form.Group>
          <label className="genre">Genre:</label>
          <Multiselect
            options={genresOptions}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="label"
            placeholder="Select Genre"
          />

          <Form.Group className="runtime" controlId="runtime">
            <Form.Label>
              <span className="required">Runtime:</span>：
            </Form.Label>
            <Form.Control
              type="text"
              name="runtime"
              aria-describedby="runtime"
              onChange={handleChange}
              defaultValue={movie?.runtime}
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleFormRest}>
              reset
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default memo(ActiveMovieForm);
