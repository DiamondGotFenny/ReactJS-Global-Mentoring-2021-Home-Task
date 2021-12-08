import React, { useState } from 'react';
import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
//import { renderHook, act } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';
import Content from './Content';
import server from '../../mock/server';

import httpService from '../../services/httpService';

import { moviesList } from '../../mockData/MoviesList';
import { useLocation, useNavigate } from 'react-router-dom';

const mockedUsedNavigate = jest.fn();
const mockUsedLocation = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
  useLocation: () => mockUsedLocation,
}));

const mockSelector = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: () => mockSelector,
  useDispatch: () => jest.fn(),
}));

//jest.mock('../../services/httpService');

const handleGenreClick = jest.fn();

beforeEach(() => {
  jest.spyOn(window, 'alert').mockImplementation(() => {});
});

beforeAll(() => server.listen());

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());

//test if the content is rendered
describe('movie should be render in Content component correctly', () => {
  const url = '/movies';
  it('should render movies at the content', async () => {
    act(() => {
      render(<Content />);
    });
    await httpService.get(url);

    expect(screen.getByText('Sort by')).toBeInTheDocument();
    const moviesCountElement = await screen.findByText(/found/g);

    expect(moviesCountElement.textContent).toBe('10 movies found');
  });
  it('the handleGenreClick is call when Action button is clicked', async () => {
    render(<Content />);

    await httpService.get(url);

    const actionButton = screen.getByTestId('Action');
    actionButton.onclick = handleGenreClick.mockImplementation(() => {})(
      'Action'
    );
    expect(actionButton).toBeInTheDocument();

    fireEvent.click(actionButton);

    expect(handleGenreClick).toHaveBeenCalledTimes(1);
    expect(handleGenreClick).toHaveBeenCalledWith('Action');

    const navigate = useNavigate();
    expect(navigate).toHaveBeenCalledWith({
      search: 'genre=Action',
    });

    await waitFor(() => {
      const moviesCountElement = screen.getByText(/found/g);

      expect(moviesCountElement.textContent).toBe('5 movies found');
    });
  });
  /* 
  it('the moviesList is filtered when the Action button is clicked', async () => {
    render(<Content />);

    const actionButton = screen.getByTestId('Action');
    actionButton.onclick = handleGenreClick.mockImplementation(() => {})(
      'Action'
    );
    fireEvent.click(actionButton);
    
  }); */
});
