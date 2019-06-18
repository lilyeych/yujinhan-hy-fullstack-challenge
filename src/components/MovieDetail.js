import React from 'react';

const MovieDetail = ({ movie }) => {
  if (movie.length === 0) {
    return <div>Please select a movie.</div>;
  }

  const { original_title, release_date, poster_path, overview, genres, tagline, runtime } = movie;
  let posterIMG = `https://image.tmdb.org/t/p/w500${poster_path}`;

  const genreList = genres.map((genre) => {
    return genre.name;
  });

  return (
    <div className="movie-detail ui items">
      <div className="item">
        <div className="image">
          <img src={posterIMG} alt={original_title} />
        </div>
        <div className="content">
          <h1>{original_title}</h1>
          <div className="description">
            <p>Description: {overview}</p>
          </div>
          <div className="extra">
            <p><strong>Released date</strong>: {release_date}</p>
            { tagline && <p><strong>Tag line</strong>: {tagline}</p> }
            <p><strong>Runtime</strong>: {runtime} min</p>
            <p><strong>Genre</strong>: {genreList.join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
