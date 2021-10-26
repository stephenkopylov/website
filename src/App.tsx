import React from 'react';
import logo from './logo.svg';
import './App.css';

import Lottie from "lottie-react";

import groovyWalkAnimation from "./static/data.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Lottie style={{width:100, height:100}} animationData={groovyWalkAnimation} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
