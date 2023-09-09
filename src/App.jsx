import React, { Component } from "react"; // Import React
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Card from "./components/Card/Card.jsx";

// ?Focus on the use of class. In order to use class we must import component. The H! in this example references the this.state.object that was created within the class.
class App extends Component {
  constructor() {
    super(); //
    this.state = {
      name: "Orion",
      count: 0, // Add count to the state
    };
  }

  // Function to update the count in the state
  updateCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    const { count } = this.state; // Destructure count from state

    return (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Hello {this.state.name}</h1>
        <div className="card">
          <button onClick={this.updateCount}>count is {count}</button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
          <Card />
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    );
  }
}

export default App;
