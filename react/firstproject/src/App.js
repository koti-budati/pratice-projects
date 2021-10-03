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
        <Parent />
      </div>
    );
  }
}

export default App;
