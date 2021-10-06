import React from "react";

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
    return <div></div>;
  }
}

export default Parent;
