import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import * as redux from 'react-redux';
import thunk from 'redux-thunk';
import {
  render,
  cleanup,
  fireEvent,
  screen,
  waitFor,
} from '@testing-library/react';
import reducers from '../reducers/reducers';
import EditMenu from './EditMenu';
import httpService from '../services/httpService';

jest.mock('../services/httpService', () => {
  return {
    delete: jest.fn(Promise.resolve({})),
  };
});
const mockMovie = {
  id: 284053,
  title: 'Thor: Ragnarok',
  tagline: 'No Hammer. No Problem.',
  vote_average: 7.4,
  vote_count: 5349,
  release_date: '2017-10-25',
  poster_path:
    'https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
  overview:
    'Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.',
  budget: 180000000,
  revenue: 854229371,
  genres: ['Action', 'Adventure', 'Fantasy'],
  runtime: 130,
};

const store = createStore(reducers, applyMiddleware(thunk));

const renderWithRedux = (component, store) => {
  return {
    ...render(<redux.Provider store={store}>{component}</redux.Provider>),
    store,
  };
};

function makeTestStore(opts = {}) {
  const origDispatch = store.dispatch;
  store.dispatch = jest.fn(origDispatch);
  return store;
}

afterEach(cleanup);

it('dispatch deletedMovie id after deleted button cliced', async () => {
  const store = makeTestStore();
  jest.spyOn(window, 'alert').mockImplementation(() => {});
  renderWithRedux(
    <EditMenu open={true} setOpen={jest.fn} movie={mockMovie} />,
    store
  );
  const deleteButton = screen.getByText('Delete');
  fireEvent.click(deleteButton);
  await waitFor(() => expect(httpService.delete).toHaveBeenCalledTimes(1));
  expect(store.dispatch).toHaveBeenCalled();
});
