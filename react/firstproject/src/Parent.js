import React from "react";
import Child from "./Child";
import classes from "./Parent.module.css";

class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }
  renderMovies = () => {
    let list = this.state.movies.map((movie) => {
      return <li>{movie.movie}</li>;
    });
    return list;
  };

  render() {
    return (
      <div>
        <h1 className={classes.h1}>Hello from Parent </h1>
        <Child
          updateMovies={(moviesList) => {
            this.setState({ movies: moviesList });
          }}
        />
        {this.renderMovies()}
      </div>
    );
  }
}

export default Parent;
