import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { MovieListItemWrapper, StyledSpan, StyledImg  } from '../../../components/MovieList/MovieListItem/MovieListItem';

const StyledWrapper = styled(MovieListItemWrapper)`
  background: #fff;
  height: 40rem;
  width: 70%;
  margin: 0 auto;
  cursor: default;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Details = styled.div`
  margin-top: -2rem;
  grid-column: 1 / -1;
  padding: 2rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
`;

const Description = styled.p`
  font-size: 1rem;
  padding-top: 1.1rem;
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
      <Details>
        <Title>{location?.state?.title}</Title>
        <Description>{location?.state?.description}</Description>
      </Details>
    </StyledWrapper>
  );
};

export default Detail;
