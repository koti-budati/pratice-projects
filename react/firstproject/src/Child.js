import React from "react";

class Child extends React.Component {
  render() {
    let k = 5;
    return (
      <div>
        <button
          onClick={() => {
            this.props.updateCounter(k);
          }}
        >
          +{k}
        </button>
      </div>
    );
  }
}

export default Child;
