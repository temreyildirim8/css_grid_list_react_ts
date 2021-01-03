import React, { Component } from 'react';
import styled from 'styled-components';

import MovieList from './../../components/MovieList/MovieList';
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
      <Wrapper>
        <Movies>
          <MovieList movieData={dummy.results} />
        </Movies>
      </Wrapper>
    </>
  );
};

export default Dashboard;
