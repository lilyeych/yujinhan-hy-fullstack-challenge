import React from 'react';
import MovieCard from './MovieCard';

const MoviesList = ({ movies, onMovieSelect })  => {
  const movie = movies.map((movie) => {
    return <MovieCard onMovieSelect={onMovieSelect} movie={movie} key={movie.id}/>
  });

  return <div className="ui four column grid stackable cards">{movie}</div>;
};

export default MoviesList;
