import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./components/Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image
          eagle={
            "https://images.pexels.com/photos/145962/pexels-photo-145962.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
        />
      </div>
    );
  }
}

export default App;
