import React from "react";

class Child extends React.Component {
  componentDidMount() {
    this.props.updateCounter(100);
  }
  render() {
    return (
      <div>
        <h1> Child</h1>
      </div>
    );
  }
}

export default Child;
