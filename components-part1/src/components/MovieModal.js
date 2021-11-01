import React, { useRef, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Multiselect from 'multiselect-react-dropdown';
const ActiveMovieForm = ({ isOpen, handleClose, movie, movies, setMovies }) => {
  const genresOptions = [
    { label: 'Action', value: 'Action' },
    { label: 'Adventure', value: 'Adventure' },
    { label: 'Animation', value: 'Animation' },
    { label: 'Comedy', value: 'Comedy' },
    { label: 'Crime', value: 'Crime' },
    { label: 'Documentary', value: 'Documentary' },
  ];
  const [formData, setFormData] = useState({});
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    //submit data to server here
    console.log(formData);
    setMovies([...movies, formData]);
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
              value={movie?.title}
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
              value={movie?.release_date}
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
              value={movie?.poster_path}
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
              value={movie?.rating}
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
              value={movie?.runtime}
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

export default ActiveMovieForm;
