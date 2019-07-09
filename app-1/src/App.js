import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  handleInput(value) {
    this.setState({ input: value });
  }

  render() {
    return (
      <div>
        <input onChange={event => this.handleInput(event.target.value)} />
        <p>{this.state.input}</p>
      </div>
    );
  }
}

export default App;

// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       message: ""
//     };
//   }

//   handleChange(value) {
//     this.setState({ message: value });
//   }

//   render() {
//     return (
//       <div className="App">
//         <input onChange={e => this.handleChange(e.target.value)} type="text" />
//         <p>{this.state.message}</p>
//       </div>
//     );
//   }
// }

// export default App;

// import React, {Component} from 'react';
// import Textbox from './components/Textbox';

// function App() {
//   render() {
//     return (
//       <div className="textContainer">
//         <Textbox />
//       </div>
//     );
//   }
// }

// export default App

// import React, { Component } from "react";
// import Textbox from "./components/Textbox";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Textbox />
//       </div>
//     );
//   }
// }

// export default App;

// import React, { Component } from "react";
// import "./App.css";
// import Textbox from "./components/Textbox";
// import DataArray from "./components/DataArray";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Textbox />
//         <DataArray />
//       </div>
//     );
//   }
// }

// export default App;
