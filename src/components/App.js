import React from 'react';
import '../css/base.css';
import themoviedb from '../apis/themoviedb';
import Header from './Header';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import Footer from './Footer';

class App extends React.Component {
  state = { movies: [], selectedMovie: null, selectedMovieDetails: [] };

  componentDidMount() {
    this.searchMovies(2019);
  }

  searchMovies = async (year) => {
    const response = await themoviedb.get('/discover/movie', {
      params: {
        sort_by: 'primary_release_date',
        primary_release_year: year
      }
    });
    this.setState({ movies: response.data.results.filter(movie => movie.popularity >= 10) });

  };

  getSelectedMovieDetails = async (id) => {
    const response = await themoviedb.get(`/movie/${id}`);
    this.setState({
      selectedMovieDetails: response.data
    });
  };

  onMovieSelect = (movie) => {
    this.setState({ selectedMovie: movie }, () => {
      this.getSelectedMovieDetails(this.state.selectedMovie);
    })
  };

  render() {
    return (
      <div>
        <Header />
        <div className="ui container">
          <MovieDetail movie={this.state.selectedMovieDetails} />
          <MovieList onMovieSelect={this.onMovieSelect} movies={this.state.movies} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
