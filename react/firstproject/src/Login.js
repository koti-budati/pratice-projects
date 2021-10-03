import React from "react";

class Login extends React.Component {
  moviesList = this.props.movies.map((movie) => {
    return (
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

export default Login;
