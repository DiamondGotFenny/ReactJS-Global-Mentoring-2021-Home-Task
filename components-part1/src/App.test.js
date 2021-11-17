import { render, screen } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

//we need to overwrite the useSelector function to writable
//so that we can return a mock location object
Object.defineProperty(reactRedux, 'useSelector', {
  value: jest.fn(),
  configurable: true,
  writable: true,
});

const setup = (props = {}) => {
  const component = shallow(<App {...props} />);
  return component;
};

test('renders App without crash', () => {
  const mockDeletedMovie = '';
  const useLocationSpy = jest
    .spyOn(reactRedux, 'useSelector')
    .mockReturnValue(mockDeletedMovie);
  render(<App />);
  expect(useLocationSpy).toHaveBeenCalled();
  const contentEle = screen.getByText(/found/i);
  expect(contentEle).toBeInTheDocument();
});

it('renders without crashing', () => {
  setup();
});

it('renders correctly', () => {
  const tree = toJson(setup());
  expect(tree).toMatchSnapshot();
});
