import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'// we can ommit .js extention you can change here 'Greet' with any other name if you export this component with default
//import { Greet } from './components/Greet'// if you are using named export 

function App() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Greet></Greet> {/* if there is nothing between the tags you can simply write <Greet /> */}
    </div>
  );
}

export default App;
