import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

test('renders App without crash', () => {
  render(<App />);
  const contentEle = screen.getByText(/movies found/i);
  expect(contentEle).toBeInTheDocument();
});

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders correctly', () => {
  const tree = shallow(<App />);
  expect(toJson(tree)).toMatchSnapshot();
});
