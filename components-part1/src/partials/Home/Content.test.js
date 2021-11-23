import React, { useState } from 'react';
import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';
import searchObject from 'search-object';
import Content from './Content';
import httpService from '../../services/httpService';

import { moviesList } from '../../mockData/MoviesList';
import { useLocation, useNavigate } from 'react-router-dom';

const mockData = [...moviesList];
afterEach(cleanup);
jest.mock('../../services/httpService');

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

const handleGenreClick = jest.fn();

//test if the content is rendered
describe('movie should be render in Content component correctly', () => {
  beforeAll(() => {
    httpService.get.mockImplementation(() => Promise.resolve(mockData));
  });
  beforeEach(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    const setmoviesList = jest.fn();
    const useStateMock = jest.fn(() => [moviesList, setmoviesList]);
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render movies at the content', async () => {
    const url = '/movies';

    act(() => {
      render(<Content />);
    });
    expect(httpService.get).toHaveBeenCalledTimes(1);
    expect(httpService.get).toHaveBeenCalledWith(url);
    expect(screen.getByText('Sort by')).toBeInTheDocument();
    expect(screen.getByText(/found/g).textContent).toBe('10 movies found');
  });
  it('the handleGenreClick is call when Action button is clicked', async () => {
    render(<Content />);

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
  });
  it('the moviesList is filtered when the Action button is clicked', async () => {
    render(<Content />);

    const actionButton = screen.getByTestId('Action');
    actionButton.onclick = handleGenreClick.mockImplementation(() => {})(
      'Action'
    );
    fireEvent.click(actionButton);
    expect(screen.getByText(/found/g).textContent).toBe('5 movies found');
  });
});
