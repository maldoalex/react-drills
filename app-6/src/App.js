import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      userInput: ""
    };
    this.handleNewTask = this.handleNewTask.bind(this);
  }

  handleInputChange(value) {
    this.setState({ userInput: value });
  }

  handleNewTask() {
    this.setState({
      list: [...this.state.list, this.state.userInput],
      userInput: ""
    });
  }

  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />;
    });

    return (
      <div className="App">
        <h1>To-do List</h1>
        <div>
          <input
            value={this.state.input}
            placeholder="Enter new task"
            onChange={event => this.handleInputChange(event.target.value)}
          />
          <button onClick={this.handleNewTask}>Add</button>
        </div>
        {list}
      </div>
    );
  }
}

export default App;
