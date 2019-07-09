import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: ["chicken", "beef", "pork", "onion", "tomato", "bellpepper"]
    };
  }
  render() {
    let displayFoods = this.state.foods.map((food, index) => {
      return <h5 key={index}>{food}</h5>;
    });
    return <div>{displayFoods}</div>;
  }
}

export default App;

// import React, { Component } from "react";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       foods: ["chicken", "beef", "pork", "onion", "tomato", "bellpepper"]
//     };
//   }

//   render() {
//     let displayFoods = this.state.foods.map((element, index) => {
//       return <h4 key={index}>{element}</h4>;
//     });
//     return <div>{displayFoods}</div>;
//   }
// }

// export default App;

// import React, { Component } from "react";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       foods: ["chicken", "beef", "pork", "onion", "tomato", "bellpepper"]
//     };
//   }
//   render() {
//     let foodsToDisplay = this.state.foods.map((element, index) => {
//       return <h2 key={index}>{element}</h2>;
//     });

//     return <div className="App">{foodsToDisplay}</div>;
//   }
// }

// export default App;
