import * as ReactRouter from 'react-router';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from './Home';
import Content from '../partials/Home/Content';
import Footer from '../partials/Home/Footer';

//we need to overwrite the useLocation function to writable
//so that we can return a mock location object
Object.defineProperty(ReactRouter, 'useLocation', {
  value: jest.fn(),
  configurable: true,
  writable: true,
});

describe('Home', () => {
  it('renders Search correctly', () => {
    const mockLocation_withoutMovieId = {
      pathname: '/',
      state: {},
      key: '',
      search: '',
      hash: '',
    };
    const useLocationSpy = jest
      .spyOn(ReactRouter, 'useLocation')
      .mockReturnValue(mockLocation_withoutMovieId);
    const wrapper = shallow(<Home />);
    expect(useLocationSpy).toHaveBeenCalled();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders MovieDetail correctly with movieId', () => {
    const mockLocation_withMovieId = {
      pathname: '/',
      state: {},
      key: '',
      search: '?movie=1',
      hash: '',
    };
    const useLocationSpy = jest
      .spyOn(ReactRouter, 'useLocation')
      .mockReturnValue(mockLocation_withMovieId);
    const wrapper = shallow(<Home />);
    expect(useLocationSpy).toHaveBeenCalled();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders Content component', () => {
    const mockLocation_withoutMovieId = {
      pathname: '/',
      state: {},
      key: '',
      search: '',
      hash: '',
    };
    const useLocationSpy = jest
      .spyOn(ReactRouter, 'useLocation')
      .mockReturnValue(mockLocation_withoutMovieId);
    const wrapper = shallow(<Home />);
    expect(wrapper.containsMatchingElement(<Content />)).toEqual(true);
  });
  it('renders Footer component', () => {
    const mockLocation_withoutMovieId = {
      pathname: '/',
      state: {},
      key: '',
      search: '',
      hash: '',
    };
    const useLocationSpy = jest
      .spyOn(ReactRouter, 'useLocation')
      .mockReturnValue(mockLocation_withoutMovieId);
    const wrapper = shallow(<Home />);
    expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
  });
});
