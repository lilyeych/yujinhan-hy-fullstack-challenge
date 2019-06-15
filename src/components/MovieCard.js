import React from 'react';

const MovieCard = ({ movie, onMovieSelect }) => {
  const { original_title, release_date, poster_path } = movie;
  let posterIMG = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className="column">
      <div className="ui fluid card" onClick={() => onMovieSelect(movie.id)}>
        <div className="image">
          <img src={posterIMG} alt={original_title} />
        </div>
        <div className="content">
          <h2>{original_title}</h2>
        </div>
        <div className="extra">
          <p>{release_date}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
