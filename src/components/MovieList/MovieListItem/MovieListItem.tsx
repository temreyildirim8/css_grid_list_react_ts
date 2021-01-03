import React from 'react';
import styled from 'styled-components';

const MovieListItemWrapper = styled.div`
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

const StyledImg = styled.img`
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

const StyledSpan = styled.span`
  height: 2.5rem;
  width: 5rem;
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
  margin: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 50px;
  color: green;
  z-index: 2;
  grid-row: 1 /3;
  grid-column: 2 / 3;
  justify-self: end;
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

interface MovieListItemProps {
  key: any;
  image: string;
  title: string;
  rating: number;
  description: string;
}

const MovieListItem = ({ image, title, rating }: MovieListItemProps) => {
  const imageURL = 'http://image.tmdb.org/t/p/w780//' + image;

  return (
    <MovieListItemWrapper>
      <StyledImg src={imageURL} alt={title} />
      <StyledSpan>{rating.toFixed(1)}</StyledSpan>
      <Details>
        <Title>{title}</Title>
      </Details>
    </MovieListItemWrapper>
  );
};

export default MovieListItem;
