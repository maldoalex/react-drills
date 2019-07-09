import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername(value) {
    this.setState({ username: value });
  }

  handlePassword(value) {
    this.setState({ password: value });
  }

  alertBox(value) {
    alert(
      "username: " +
        this.state.username +
        "  " +
        "password: " +
        this.state.password
    );
  }

  render() {
    return (
      <div className="App">
        <input onChange={event => this.handleUsername(event.target.value)} />
        <input onChange={event => this.handlePassword(event.target.value)} />
        <button
          onClick={event =>
            this.alertBox(this.state.username, this.state.password)
          }
        />
      </div>
    );
  }
}

export default Login;
