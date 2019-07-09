import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      filterString: "",
      foods: ["beef", "chiscken", "pork", "onion", "tomato", "bellpepper"]
    };
  }

  handleInput(value) {
    this.setState({ filterString: value });
  }

  render() {
    let displayFoods = this.state.foods
      .filter((food, index) => {
        return food.includes(this.state.filterString);
      })
      .map((food, index) => {
        return <h1 key={index}>{food}</h1>;
      });
    return (
      <div>
        <input onChange={event => this.handleInput(event.target.value)} />
        {displayFoods}
      </div>
    );
  }
}

export default App;

// import React, { Component } from "react";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       filterString: "",
//       foods: ["beef", "chiscken", "pork", "onion", "tomato", "bellpepper"]
//     };
//   }

//   handleInput(value) {
//     this.setState({ filterString: value });
//   }

//   render() {
//     let displayFoods = this.state.foods
//       .filter((food, index) => {
//         return food.includes(this.state.filterString);
//       })
//       .map((food, index) => {
//         return <h1 key={index}>{food}</h1>;
//       });
//     return (
//       <div className="App">
//         <input onChange={event => this.handleInput(event.target.value)} />
//         {displayFoods}
//       </div>
//     );
//   }
// }

// export default App;

// import React, { Component } from "react";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       foods: ["beef", "chiscken", "pork", "onion", "tomato", "bellpepper"],
//       filterString: ""
//     };
//   }

//   handleInput(value) {
//     this.setState({ filterString: value });
//   }

//   render() {
//     let displayFoods = this.state.foods
//       .filter((food, index) => {
//         return food.includes(this.state.filterString);
//       })
//       .map((food, index) => {
//         return <h2 key={index}>{food}</h2>;
//       });
//     return (
//       <div className="App">
//         <input
//           onChange={event => this.handleInput(event.target.value)}
//           type="text"
//         />
//         {displayFoods}
//       </div>
//     );
//   }
// }

// export default App;

// import React, { Component } from "react";
// import "./App.css";

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       filterString: "",
//       foods: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
//     };
//   }

//   handleChange(filter) {
//     this.setState({ filterString: filter });
//   }

//   render() {
//     let foodsToDisplay = this.state.foods
//       .filter((element, index) => {
//         return element.includes(this.state.filterString);
//       })
//       .map((element, index) => {
//         return <h2 key={index}>{element}</h2>;
//       });

//     return (
//       <div className="App">
//         <input onChange={e => this.handleChange(e.target.value)} type="text" />
//         {foodsToDisplay}
//       </div>
//     );
//   }
// }

// export default App;
