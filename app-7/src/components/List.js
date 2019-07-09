/*
import React, { Component } from "react";
import Todo from "./Todo";

//functional components just return JSX/Visuals
function List(props) {
  let taskList = props.tasks.map((task, index) => {
    return <Todo key={index} task={task} />;
  });
  return <div>{taskList}</div>;
}
{
  
  // <div>
  //   [
  //     <Todo key={0} task="todo1" />
  //     <Todo key={1} task="todo2" />
  //     <Todo key={2} />
  //     <Todo key={3} />
  //   ]
  // </div> 
  
}
export default List;
*/

// import React from "react";
// import Todo from "./Todo";

// function List(props) {
//   let taskList = props.tasks.map((task, index) => {
//     return <Todo key={index} task={task} />;
//   });
//   return <div>{taskList}</div>;
// }

// export default List;

import React from "react";
import Todo from "./Todo";

function List(props) {
  let taskList = props.tasks.map((task, index) => {
    return <Todo key={index} task={task} />;
  });
  return <div>{taskList}</div>;
}

export default List;
