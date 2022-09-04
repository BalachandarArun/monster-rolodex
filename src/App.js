import logo from './logo.svg';
import './App.css';
import React from 'react';

class ClassComponent extends React.Component {
    constructor(props) {
      super();
      this.state = {
        "name" : props.name,
        "Department" : "IT"
      };
    }

    render() {
      return (
        <h1>Hello guys {this.state.name}</h1>
      );
    }
}

const Greet = (props) => {
  return (
    <h1 className='fun'>Hello {props.name}</h1>
  );
}
let clicked = 0;
function perform() {
    clicked++;
    console.log("Clicked " + clicked);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>React is open source Framework developed by Facebook</h1>
        <Greet name="Bala"/>
        <ClassComponent name="Fun"/>
        <button onClick={perform}>Click me to see changes</button>
      </header>
    </div>
  );
}

export default App;
