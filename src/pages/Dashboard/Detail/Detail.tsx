import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import {
  MovieListItemWrapper,
  StyledSpan,
  StyledImg,
  Details,
  Title } from '../../../components/MovieList/MovieListItem/MovieListItem';

const StyledWrapper = styled(MovieListItemWrapper)`
  height: 40rem;
  width: 70%;
  margin: 40px auto 0;
  cursor: default;
`;

const StyledDetails = styled(Details)`
  margin-top: -7rem;
`;

const Description = styled.div`
  font-size: 1rem;
  padding-top: 2rem;
  overflow: hidden;
  margin: -2rem auto 0;
  height: 11rem;
`;

const Detail = () => {
  const location: any = useLocation();

  const imageURL = 'http://image.tmdb.org/t/p/w780//' + location?.state?.image;

  return (
    <StyledWrapper>
      <StyledImg src={imageURL} alt={location?.state?.title} />
      <StyledSpan>{location?.state?.rating.toFixed(1)}</StyledSpan>
      <StyledDetails>
        <Title>{location?.state?.title}</Title>
        <Description>{location?.state?.description}</Description>
      </StyledDetails>
    </StyledWrapper>
  );
};

export default Detail;
