import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { reducers } from '../reducers/reducers';
import Content from '../partials/Home/Content';

const initialState = {};

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducers, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

afterEach(cleanup);

it('checks initial state is equal to 0', () => {
  renderWithRedux(<Content />);
});
