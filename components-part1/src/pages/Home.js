import React from 'react';
import Content from '../partials/Home/Content';
import Footer from '../partials/Home/Footer';
import Search from '../partials/Home/Search';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Search />
      <Content />
      <Footer />
    </HomeWrapper>
  );
};

export default Home;
