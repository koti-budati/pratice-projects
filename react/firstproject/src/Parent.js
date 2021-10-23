import React from "react";
import Child from "./Child";

class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  counterUpdate = (num = 1) => {
    this.setState({ counter: this.state.counter + num });
  };
  render() {
    return <Child updateCounter={this.counterUpdate}/>;
  }
}

export default Parent;
