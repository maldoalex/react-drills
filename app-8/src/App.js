import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      darthVader: ""
    };
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/people/4").then(response => {
      this.setState({
        darthVader: response.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Name: {this.state.darthVader.name}</h1>
        <h1>Birth Year: {this.state.darthVader.birth_year}</h1>
        <h1>Height: {this.state.darthVader.height}</h1>
        <h1>Eye Color: {this.state.darthVader.eye_color}</h1>
      </div>
    );
  }
}

export default App;
