import React from "react";

class Child extends React.Component {
  movies = [
    {
      movie: "Fault in our stars",
      year: 2015,
    },
  ];
  componentDidMount() {
    this.props.updateMovies(this.movies);
  }
  render() {
    return (
      <div>
        <h1>Hello from Child</h1>
      </div>
    );
  }
}

export default Child;
