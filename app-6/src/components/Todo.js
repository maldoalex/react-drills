import React, { Component } from "react";

class Todo extends Component {
  constructor() {
    super();
  }
  render() {
    return <p>{this.props.task}</p>;
  }
}

export default Todo;
