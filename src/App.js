import React from 'react';
import { Router, Link } from "@reach/router";

import logo from './logo.svg';
import './App.css';
import FirstComponent from 'first-test-module';
import SecondComponent from 'second-test-module';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="first">First</Link>
        <Link to="second">Second</Link>
      </nav>
      <Router>
        <FirstComponent text={"text 1"} path={'first'}/>
        <SecondComponent text={"text 2"} path={'second'}/>
      </Router>
    </div>
  );
}

export default App;
