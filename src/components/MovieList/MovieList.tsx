import React, { Component } from 'react';
import styled from 'styled-components';

import MovieListItem from './MovieListItem/MovieListItem';

const MovieListWrapper = styled.div`
  margin-bottom: 40px;

  &:nth-child(3) {
    margin-bottom: 20px;
    border-bottom: none;
    padding-bottom: 60px;
  }
`;

const MovieListItems = styled.div`
  grid-column: center-start / center-end;
  margin: -0.5rem 0 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 4rem;
  align-items: start;
  padding: 0 40px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 0;
    padding: 0;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 1rem;
    padding: 0 20px;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    padding: -10px 0;
  }
`;

const Title = styled.h1`
  text-align: left;
  padding: 20px 0 0 30px;

  @media (max-width: 768px) {
    padding: 20px 0 0 20px;
  }
`;

interface MovieListSingleObject {
  adult?: boolean;
  backdrop_path?: string;
  id?: number;
  title?: string;
  vote_average?: number;
  overview?: string;
}

interface MovieListProps {
  movieData?: MovieListSingleObject[];
}

const MovieList = ({ movieData }: MovieListProps) => {
  // This page will be handled according to categories, this is dummy now
  return (
    <>
      <MovieListWrapper>
        <Title> Aksiyon/Fantastik Filmler </Title>
        <MovieListItems>
          {movieData?.slice(0, 6).map((movie: any) => (
            <MovieListItem
              key={movie.id}
              image={movie.backdrop_path}
              title={movie.title}
              description={movie.overview}
              rating={movie.vote_average}
            />
          ))}
        </MovieListItems>
      </MovieListWrapper>
      <MovieListWrapper>
        <Title> Gerilim Filmleri </Title>
        <MovieListItems>
          {movieData?.slice(6, 12).map((movie: any) => (
            <MovieListItem
              key={movie.id}
              image={movie.backdrop_path}
              title={movie.title}
              description={movie.overview}
              rating={movie.vote_average}
            />
          ))}
        </MovieListItems>
      </MovieListWrapper>
      <MovieListWrapper>
        <Title> Belgeseller </Title>
        <MovieListItems>
          {movieData?.slice(12, 18).map((movie: any) => (
            <MovieListItem
              key={movie.id}
              image={movie.backdrop_path}
              title={movie.title}
              description={movie.overview}
              rating={movie.vote_average}
            />
          ))}
        </MovieListItems>
      </MovieListWrapper>
    </>
  );
};

export default MovieList;
