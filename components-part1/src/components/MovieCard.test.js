import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EditMenu from './EditMenu';
import MovieCard from './MovieCard';

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

const mockedUsedNavigate = jest.fn();
const mockUsedLocation = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
  useLocation: () => mockUsedLocation,
}));

const setup = (props = {}) => {
  const wrapper = shallow(<MovieCard {...props} />);
  return wrapper;
};

describe('render movie card correctly', () => {
  const wrapper = setup({ movie: mockMovie });
  it('should render without crash', () => {
    expect(wrapper.exists()).toBe(true);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render movie info correctly', () => {
    expect(wrapper.find({ children: mockMovie.title })).toBeTruthy();
    expect(wrapper.find({ children: mockMovie.genres })).toBeTruthy();
    expect(wrapper.find({ children: mockMovie.release_date })).toBeTruthy();
    const imgSrc = wrapper.find('img').prop('src');
    expect(imgSrc).toBe(mockMovie.poster_path);
  });
});

describe('the movie card interactive correctly', () => {
  const wrapper = setup({ movie: mockMovie });
  it('should call the navigate function when clicked', () => {
    wrapper.find('.click-container').simulate('click');
    expect(mockedUsedNavigate).toHaveBeenCalledWith(
      `/search?movie=${mockMovie.id}`
    );
  });
  it('the EditMenu should be rendered when menu Button is clicked', () => {
    wrapper.find('.menuButton').simulate('click');
    expect(wrapper.containsMatchingElement(<EditMenu />)).toBeTruthy();
  });
});
