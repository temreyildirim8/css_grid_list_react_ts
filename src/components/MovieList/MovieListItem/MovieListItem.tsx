import React from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

export const MovieListItemWrapper = styled.div`
  background: #fff;
  border: solid 1px #dedede;
  opacity: 1;
  border-radius: 20px;
  height: 25rem;
  width: 100%;
  transition: all 0.4s ease;
  text-align: left;
  text-decoration: none;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 480px) {
    border-radius: 0px;
    border-style: none;
  }

  @media (min-width: 481px) {
    -webkit-box-shadow: 4px 4px 11px 0px rgba(175, 136, 209, 0.45);
    -moz-box-shadow: 4px 4px 11px 0px rgba(175, 136, 209, 0.45);
    box-shadow: 4px 4px 11px 0px rgba(175, 136, 209, 0.45);
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 20rem;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  z-index: 1;

  @media (max-width: 480px) {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
`;

export const StyledSpan = styled.span`
  height: 2rem;
  width: 4rem;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  margin: 1rem;
  padding: 0.3rem;
  background: white;
  border-radius: 50px;
  color: green;
  z-index: 2;
  grid-row: 1 / 3;
  grid-column: 2 / 3;
  justify-self: end;
`;

export const Details = styled.div`
  margin-top: -1.5rem;
  grid-column: 1 / -1;
  padding: 2rem;
`;

export const Title = styled.h3`
  font-size: 1rem;
`;

interface MovieListItemProps {
  key: any;
  image: string;
  title: string;
  rating: number;
  description: string;
}

const MovieListItem = ({ image, title, rating, description }: MovieListItemProps) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/detail', { title, image, rating, description });
  };

  const imageURL = 'http://image.tmdb.org/t/p/w780//' + image;

  return (
    <MovieListItemWrapper onClick={handleClick}>
      <StyledImg src={imageURL} alt={title} />
      <StyledSpan>{rating.toFixed(1)}</StyledSpan>
      <Details>
        <Title>{title}</Title>
      </Details>
    </MovieListItemWrapper>
  );
};

export default MovieListItem;
