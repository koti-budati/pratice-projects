import React from "react";
import Child from "./Child";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  count = (number) => {
    this.setState({ counter: this.state.counter + number });
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <Child updateCounter={(num) => this.count(num)} />
        <h1>{this.state.counter}</h1>
      </div>
    );
  }
}

export default App;
