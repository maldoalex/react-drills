// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import Todo from "./components/Todo";
// import List from "./components/List";
// import NewTask from "./components/NewTask";

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       list: []
//     };

//     this.handleAddTask = this.handleAddTask.bind(this);
//   }

//   handleAddTask(task) {
//     this.setState({ list: [...this.state.list, task] });
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>To-do List:</h1>
//         <NewTask add={this.handleAddTask} />
//         <List tasks={this.state.list} />
//       </div>
//     );
//   }
// }

// export default App;

// import React, { Component } from "react";
// import List from "./components/List";
// import NewTask from "./components/NewTask";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       list: []
//     };
//     this.handleAddTask = this.handleAddTask.bind(this);
//   }

//   handleAddTask(task) {
//     this.setState({ list: [...this.state.list, task] });
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Todo List :</h1>
//         <NewTask add={this.handleAddTask} />
//         <List tasks={this.state.list} />
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import List from "./components/List";
import NewTask from "./components/NewTask";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task) {
    this.setState({ list: [...this.state.list, task] });
  }

  render() {
    return (
      <div className="App">
        <h3>todo list:</h3>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App;
