import React, { Component } from "react";

class FilterArray extends Component {
  constructor() {
    super();
    this.state = {
      arrayWords: ["super", "summer", "spoon", "swim", "sun", "sale"],
      filterArrayWord: ""
    };
  }

  handleChange(value) {
    this.setState({ filterArrayWord: value });
  }

  render() {
    let wordToDisplay = this.state.arrayWords
      .filter((element, index) => {
        return element.includes(this.state.filterArrayWord);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });

    return (
      <div>
        <input onChange={e => this.handleChange(e.target.value)} />
        {wordToDisplay}
      </div>
    );
  }
}

export default FilterArray;
