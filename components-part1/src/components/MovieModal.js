import React, { useState, memo } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import Multiselect from 'multiselect-react-dropdown';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import httpService from '../services/httpService';

const genresOptions = [
  { label: 'Action', value: 'Action' },
  { label: 'Adventure', value: 'Adventure' },
  { label: 'Animation', value: 'Animation' },
  { label: 'Comedy', value: 'Comedy' },
  { label: 'Crime', value: 'Crime' },
  { label: 'Drama', value: 'Drama' },
  { label: 'Romance', value: 'Romance' },
];

const formInitialValues = {
  title: '',
  release_date: '',
  genres: [],
  poster_path: '',
  vote_average: 1,
  runtime: 120,
  overview: '',
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  release_date: Yup.string(),
  poster_path: Yup.string().required('Poster path is required'),
  vote_average: Yup.number()
    .typeError('you must specify a number for rating')
    .min(1, 'Rating must be greater than 1')
    .max(10, 'Rating must be less than 10'),
  runtime: Yup.number()
    .integer()
    .typeError('rumtime must be integer')
    .required('Runtime is required'),
  overview: Yup.string().required('Overview is required'),
});

const StyledErrorMessage = styled.div`
  color: #ff6565;
  padding: 0.2em 0.2em;
  height: 1em;
  font-size: 0.8em;
  display: block;
  margin-bottom: 0.5em;
`;

const MovieModal = ({ isOpen, handleClose, movie, dispatch }) => {
  const [genres, setGenres] = useState([]);

  const _handleSubmit = async (values, actions) => {
    //submit data to server here
    //we don't acutally need to use dispatch here in real scenario
    //generate a ramdom id for the movie
    actions.setSubmitting(true);
    const genresArr = genres.map((genre) => genre.value);
    const formData = { ...values, genres: genresArr };
    try {
      if (movie) {
        httpService.put(`/movies/${movie.id}`, formData);
        dispatch({
          type: 'UPDATE_MOVIE',
          payload: {
            ...formData,
            id: movie.id,
          },
        });
      } else {
        httpService.post('/movies', formData);
        console.log(formData, 'post');
        dispatch({
          type: 'ADD_MOVIE',
          payload: formData,
        });
      }
    } catch (error) {
      alert(error);
    }
    actions.resetForm();
    actions.setSubmitting(false);
    handleClose();
  };

  const formik = useFormik({
    initialValues: movie ? movie : formInitialValues,
    validationSchema,
    onSubmit: _handleSubmit,
  });

  const onSelect = (selectedList, selectedItem) => {
    setGenres(selectedList);
  };

  const onRemove = (selectedList, removedItem) => {
    setGenres(selectedList);
  };

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{movie ? 'Edit Movie' : 'Add Movie'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="title" controlId="title">
            <Form.Label>
              <span className="required">Title:</span>：
            </Form.Label>
            <Form.Control
              type="text"
              name="title"
              aria-describedby="title"
              placeholder="Movie Title"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            {formik.errors.title && (
              <StyledErrorMessage id="feedback">
                {formik.errors.title}
              </StyledErrorMessage>
            )}
          </Form.Group>
          <Form.Group className="release_date" controlId="release_date">
            <Form.Label>
              <span className="required">Release Date:</span>：
            </Form.Label>
            <Form.Control
              type="date"
              name="release_date"
              aria-describedby="release_date"
              placeholder="Select Date"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.release_date}
            />
            {formik.errors.release_date && (
              <StyledErrorMessage id="feedback">
                {formik.errors.release_date}
              </StyledErrorMessage>
            )}
          </Form.Group>
          <Form.Group className="poster_path" controlId="poster_path">
            <Form.Label>
              <span className="required">Movie Url:</span>：
            </Form.Label>
            <Form.Control
              type="text"
              name="poster_path"
              aria-describedby="poster_path"
              placeholder="htts://"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.poster_path}
            />
            {formik.errors.poster_path && (
              <StyledErrorMessage id="feedback">
                {formik.errors.poster_path}
              </StyledErrorMessage>
            )}
          </Form.Group>
          <Form.Group className="vote_average" controlId="vote_average">
            <Form.Label>
              <span className="required">Rating:</span>：
            </Form.Label>
            <Form.Control
              type="number"
              name="vote_average"
              aria-describedby="vote_average"
              placeholder="7.8"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.vote_average}
            />
            {formik.errors.vote_average && (
              <StyledErrorMessage id="feedback">
                {formik.errors.vote_average}
              </StyledErrorMessage>
            )}
          </Form.Group>
          <label className="genre">Genre:</label>
          <Multiselect
            options={genresOptions}
            onSelect={onSelect}
            onRemove={onRemove}
            selectedValues={movie?.genres.map((genre) => {
              return { label: genre, value: genre };
            })}
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
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.runtime}
            />
            {formik.errors.runtime && (
              <StyledErrorMessage id="feedback">
                {formik.errors.runtime}
              </StyledErrorMessage>
            )}
          </Form.Group>
          <Form.Group className="overview" controlId="overview">
            <Form.Label>
              <span className="required">Overview:</span>：
            </Form.Label>
            <Form.Control
              as="textarea"
              name="overview"
              aria-describedby="overview"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.overview}
              rows="6"
            />
            {formik.errors.overview && (
              <StyledErrorMessage id="feedback">
                {formik.errors.overview}
              </StyledErrorMessage>
            )}
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={formik.handleReset}>
              reset
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default memo(MovieModal);
