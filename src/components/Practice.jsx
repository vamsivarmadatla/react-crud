import React from "react";
import { Component } from "react";

class Practice extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("count: " + this.state.count);
    return (
      <>
        <p>count:: {this.state.count}</p>
        <button className="btn btn-danger" onClick={this.increase}>
          count
        </button>
      </>
    );
  }
}

export default Practice;
