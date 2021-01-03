import React, { Component } from 'react';
import styled from 'styled-components';

import MovieList from './../../components/MovieList/MovieList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { dummy } from '../../store/dummy';

const Wrapper = styled.div`
  display: block;
`;

const Movies = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  background-color: #ffffff;
`;

const Dashboard = () => {
  return (
    <>
      <Header title={''} description={''} />
      <Wrapper>
        <Movies>
          <MovieList movieData={dummy.results} />
        </Movies>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Dashboard;
