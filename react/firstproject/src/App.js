import React from "react";
import Movies from "./Movies";
import Parent from "./Parent";

class App extends React.Component {
  moviesList = [
    { movie: "baby", year: "2021" },
    { movie: "baby", year: "2021" },
  ];
  render() {
    return (
      <div>
        <Movies movies={this.moviesList} />
        <h1>Hello</h1>
        <Parent />
      </div>
    );
  }
}

export default App;
