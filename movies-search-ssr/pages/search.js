import Head from 'next/head';
import styles from './search.module.css';
import Footer from '../partials/Footer';
import Search from '../partials/Search';
import { useRouter } from 'next/router';
import Content from '../partials/Content';
import httpService from '../services/httpService';
import MovieDetail from '../partials/MovieDetail';

const SearchPage = ({ data }) => {
  const { query } = useRouter();
  const renderMovie = () => {
    //find the movie via movie query id from data.data
    const filteredMovie = data.data.find(
      (movie) => movie.id === parseInt(query.movie)
    );
    return <MovieDetail movie={filteredMovie} />;
  };
  return (
    <div className={styles.homeWrapper}>
      <Head>
        <title>Movies Search</title>
      </Head>
      {query.movie ? renderMovie() : <Search />}
      <Content movies={data.data} />
      <Footer />
    </div>
  );
};

export default SearchPage;

export const getStaticProps = async (context) => {
  try {
    const { data } = await httpService.get('/movies');
    return {
      props: { data },
    };
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};
