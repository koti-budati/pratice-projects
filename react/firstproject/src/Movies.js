import React from "react";

class Movies extends React.Component {
  moviesList = this.props.movies.map((movie) => {
    return (
      // this to implement props
      <div>
        <li>movie: {movie.movie} </li>
        <li>year: {movie.year}</li>
      </div>
    );
  });
  render() {
    return (
      <div>
        <u1> {this.moviesList}</u1>
      </div>
    );
  }
}

export default Movies;
