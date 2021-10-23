import React from "react";
import Main from "./Pages/Main";
// data format from backend

// array of data

// state search term, youtubeData -> backend response, loading -> in transission
class App extends React.Component {
  // initial state
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
