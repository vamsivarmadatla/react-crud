import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    console.log("constructor method");
  }
  componentWillMount() {
   
    console.log("Component WILL MOUNT!");
  }
  componentDidMount() {
    console.log("Component DID MOUNT!");
  }
  componentWillReceiveProps(newProps) {
    console.log("Component WILL RECIEVE PROPS!");
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Component WILL UPDATE!");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component DID UPDATE!");
  }
  componentWillUnmount() {
    console.log("Component WILL UNMOUNT!");
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render(
    
  ) {
    return (
      <>
        <h2>{this.state.count}</h2>
        <button className="btn btn-primary" onClick={this.handleClick}>
          increment
        </button>
        <button className="btn btn-danger" onClick={this.state.count}>
          reset
        </button>
      </>
    );
  }
}

export default About;
