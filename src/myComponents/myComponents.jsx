// Fetch an API with Loading functionality using Class component:-

// import React from "react";
// export default class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { error: null, isLoaded: false, items: [] };
//   }
//   componentDidMount() {
//     fetch("https://fake-hotel-api.herokuapp.com/api/hotels")
//       .then((response) => response.json())
//       .then(
//         (result) => {
//           this.setState({ isLoaded: true, items: result });
//         },
//         (error) => {
//           this.setState({ isLoaded: true, error });
//         }
//       );
//   }
//   render() {
//     const { error, isLoaded, items } = this.state;
//     const containsErrorMessage = () => {
//       return <div>Error: {error.message}</div>;
//     };
//     const isLoading = () => {
//       return <div>Loading...</div>;
//     };
//     const results = () => {
//       console.log({ items });
//       return (
//         <ul>
//           {items.map((result) => (
//             <li key={result.id}>
//               <b>Id</b>: {result.id} <br />
//               <b>Name</b>:: {result.name} <br />
//               <b>Description</b>:: {result.description}
//               <hr />
//             </li>
//           ))}
//         </ul>
//       );
//     };
//     if (error) return containsErrorMessage();
//     return !isLoaded ? isLoading() : results();
//   }
// }

////////////////////////////////////////////////////////////////

// Fetch an API with Loading functionality using function component:-

// import React, { useState, useEffect } from "react";

// const myComponents = () => {
//   const [user, fetchUser] = useState([]);
//   const [isLoaded, setIsLoaded] = useState();
//   const [error, setError] = useState();

//   useEffect(() => {
//     fetch;
//     "https://fake-hotel-api.herokuapp.com/api/hotels"
//       .then((res) => res.json())
//       .then(
//         (res) => {
//           console.log(res);
//           fetchUser(res);
//           setIsLoaded(true);
//         },
//         (error) => {
//           setError("Error");
//           setIsLoaded(true);
//         }
//       );
//   }, []);

//   const containsErrorMessage = () => {
//     return <div>Error: {error.message}</div>;
//   };
//   const isLoading = () => {
//     return <div>Loading...</div>;
//   };
//   const results = () => {
//     return (
//       <>
//         <ul>
//           {Users.map((result) => (
//             <li key={result.id}>
//               <b>Id</b>: {result.id} <br />
//               <b>Name</b>:: {result.name} <br />
//               <b>Description</b>:: {result.description} <hr />
//             </li>
//           ))}
//         </ul>
//       </>
//     );
//   };
//   if (error) return containsErrorMessage();
//   return !isLoaded ? isLoading() : results();
// };

// export default myComponents;

// Counter with functional component:-

// import { useEffect, useState } from "react";

// export default function App() {
//   const [state, setState] = useState(0);
//   useEffect(() => {
//     // alert("clicked!");
//   });
//   return (
//     <div className="App">
//       <h5>Counter : {state}</h5>
//       <button onClick={() => setState(state + 1)}> Increment </button>
//       <br />
//       <button onClick={() => setState(state - 1)}> Decrement </button>
//       <br />
//       <button onClick={() => setState(state + 2)}>run by two</button>
//       <br />
//     </div>
//   );
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Counter with Class component:-

// import "./styles.css";
// import React from "react";

// export default class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       count :0
//     }
//   }
//   increment =()=>{
//      this.setState({count: this.state.count+1})
//   }
//   decrement=()=>{
//     this.setState({count: this.state.count-1})
//   }
//   render(){
//   return (
//     <div className="App">
//       <h5>Counter : {this.state.count}</h5>
//       <button onClick={this.increment}> Increment </button>
//       <button onClick={this.decrement}> Decrement </button>
//     </div>
//   )

///////////////////////////////////////////////////////////////////////////////////////

//To Do application with Class based components:

// import React from "react";
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { items: [], text: "" };
//   }
//   handleChange = (e) => {
//     this.setState({ text: e.target.value });
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.text.length === 0) {
//       return;
//     }
//     this.setState((state) => ({
//       items: state.items.concat({ text: this.state.text }),
//       text: "",
//     }));
//   };
//   handleCancel = (e) => {
//     e.preventDefault();
//     this.setState((state) => ({
//       items: state.items.splice(1),
//       text: "",
//     }));
//   };
//   render() {
//     return (
//       <div>
//         <h3>ToDo Application</h3>
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="new-todo">What needs to be done?</label>
//           <input
//             id="new-todo"
//             onChange={this.handleChange}
//             value={this.state.text}
//           />
//           <button>Add #{this.state.items.length + 1}</button>
//           <ol>
//             {this.state.items.map((item) => (
//               <li key={item.id}>
//                 {item.text}
//                 <button onClick={this.handleCancel}>Remove</button>
//               </li>
//             ))}
//           </ol>
//         </form>
//       </div>
//     );
//   }
// }
// export default App;

// ------------------------------------------
//Todo with functional component:

// import { useState } from "react";

// export default function App() {
//   const [item, updateItem] = useState(["Read"]);
//   const [text, updateText] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (text.length === 0 || !text) return;
//     updateText("");
//     updateItem([...item, text]);
//   };
//   const handleCancel = (index) => {
//     const newTodos = [...item];
//     newTodos.splice(index, 1);
//     updateItem(newTodos);
//   };
//   return (
//     <div>
//       <h1>To Do Application </h1>
//       <label>Add task? </label>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => updateText(e.target.value)}
//       />
//       <button onClick={(e) => handleSubmit(e)}>Submit</button>
//       <ol>
//         {item.map((data, index) => (
//           <li key={data.id}>
//             {data}
//             <button onClick={() => handleCancel(index)}>Cancel</button>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// }

// ========================================================================================================================================================================
// Pass data from Child to Parents:

// import { useState } from "react";

// //parent Component
// export default function App() {
//   const [count, setCount] = useState(0); //default state is zero
//   //callback function which will get data from child component
//   const increment = () => {
//     setCount((item) => item + 1); //or count + 1 //update the count
//   };
//   return (
//     <div>
//       {/* Passing callabck function as a props to the child component*/}
//       <ChildComponent onClick={increment} />
//       <h2>Count : {count}</h2>
//     </div>
//   );
// }

// //child Component //Destructuring from props
// const ChildComponent = ({ onClick }) => {
//   //it call the parent's callback function using props
//   return <button onClick={onClick}>Click</button>;
// };
// ===========================================================================
// import { useState } from "react";

// export default function App() {
//   const [text, updateText] = useState("priya");
//   const change = (e) => {
//     updateText(e.target.value);
//   };
//   return (
//     <div>
//       <ChildComponent data={change} />
//       <h2>Inputs : {text}</h2>
//     </div>
//   );
// }

// const ChildComponent = ({ data }) => {
//   return <input onChange={data} />;
// };
// ===========================================================================================================================================================================
// Auto counter without button:

// import { useEffect, useState } from "react";

// export default function App() {
//   const [state, updateState] = useState(0);

//   useEffect(() => {
//     let interval = setInterval(() => {
//       updateState(state + 1);
//     }, 1000);
//     return () => {
//       clearInterval(interval);
//     };
//   });

//   return (
//     <div className="App">
//       <h1>{state}</h1>
//     </div>
//   );
// }
// ========================================================================================================================================================================
// ------------------- Debounce and Throttle ---------------------------

// export default function App() {
//   const handleChange = (e) => {
//     console.log("Debouncing...");
//   };

//   //every time the mouse moved this function will be invoked
//   const handleMouseMove = (e) => {
//     console.log("throttling...");
//   };

//   //debounce function
//   function debounce(fn, delay) {
//     let timer;
//     return function (...args) {
//       clearTimeout(timer);
//       timer = setTimeout(() => fn(...args), delay);
//     };
//   }
//   //throttle function
//   function throttle(func, delay) {
//     let run = false;
//     return function (...args) {
//       if (!run) {
//         func(...args);
//         run = true;
//         setTimeout(() => (run = false), delay);
//       }
//     };
//   }

//   //event listener to track the movement of the mouse
//   window.addEventListener("mousemove", throttle(handleMouseMove, 2000));

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p> Search </p>
//         <input type="text" onChange={debounce(handleChange, 500)} />
//       </header>
//     </div>
//   );
// }
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// import { useState } from "react";

// export default function App() {
//   const [state, setState] = useState("");
//   const handleText = (e) => {
//     setState(e.target.value);
//   };
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <input type="text" onChange={handleText} />
//       <h3>{state > 5 ? "greater than 5" : null} </h3>
//     </div>
//   );
// }
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// import {useState, useEffect} from "react";
// export default function App() {
//   const [state, updateState] = useState([]);
//   const [flag, updateFlag] = useState(true);
//   const [res, setRes] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/photos")
//       .then((res) => res.json())
//       .then((response) => {
//         console.log(response);
//         updateState(response);
//       });
//   }, []);
//   const handleClick = (res) => {
//     setRes(res);
//     updateFlag(!flag);
//   };
//   return (
//     <div className="App">
//       <ul>
//         {flag &&
//           state
//             .filter((item) => {
//               return [3, 6, 9, 13, 67].includes(item.id);
//             })
//             .map((result) => {
//               return (
//                 <>
//                   <li key={result.id}>
//                     <h5
//                       onClick={() => {
//                         handleClick(result);
//                       }}
//                     >
//                       {" "}
//                       Id:{result.id}{" "}
//                     </h5>
//                     <a href={result.url}> Link: {result.url} </a>
//                   </li>
//                   {/* {!!flag ? <Details props={result} /> : null} */}
//                 </>
//               );
//             })}
//         {!flag && res && <Details props={res} />}
//       </ul>
//     </div>
//   );
// }

// ------------------------------------

import React from "react";

const myComponents = () => {
  //   let data = [1, 2, 3, 4,4,5, 5, 1];

  //   let unique2 = new Set(data)
  //   console.log(unique2)

  //   let data = [1, 2, 3, 4,4,5, 5, 1];

  // let unique = data.filter((c,index)=>{

  //     return data.indexOf(c)===index

  // })

  // console.log(unique)

  // function greeting(name) {
  //     alert('Hello ' + name);
  //   }

  //   function processUserInput(callback) {
  //     var name = prompt('Please enter your name.');
  //     callback(name);
  //   }

  //   processUserInput(greeting);

  let user = "amy";

  const getUsers = () => {
    setTimeout(() => {
      console.log("hello" + user);
    }, 1000);
  };

  return <div onClick={getUsers}>myComponents</div>;
};

export default myComponents;
