/*
import React, { Component } from "react";

class NewTask extends Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  // handleChange(value) {
  //   this.setState({ input: value });
  // }
  handleChange = value => {
    this.setState({ input: value });
  };

  handleAdd() {
    this.props.add(this.state.input);
    this.setState({ input: "" });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.input}
          placeholder="Enter New Task"
          onChange={event => this.handleChange(event.target.value)}
          // onChange={argument => this.handleChange(argument)}
        />
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default NewTask;
*/

// import React, { Component } from "react";

// class NewTask extends Component {
//   constructor() {
//     super();
//     this.state = {
//       input: ""
//     };
//     this.handleAdd = this.handleAdd.bind(this);
//   }

//   handleAdd() {
//     this.props.add(this.state.input);
//     this.setState({ input: "" });
//   }

//   handleChange(value) {
//     this.setState({ input: value });
//   }

//   render() {
//     return (
//       <div>
//         <input onChange={event => this.handleChange(event.target.value)} />
//         <button onClick={this.handleAdd}>click me</button>
//       </div>
//     );
//   }
// }

// export default NewTask;

import React, { Component } from "react";

class NewTask extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  handleChange(value) {
    this.setState({ input: value });
  }

  handleAdd() {
    this.props.add(this.state.input);
    this.setState({ input: "" });
  }

  render() {
    return (
      <div>
        <input onChange={event => this.handleChange(event.target.value)} />
        <button onClick={event => this.handleAdd(event.target.value)}>
          click here
        </button>
      </div>
    );
  }
}

export default NewTask;
