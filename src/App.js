import React, { Component } from 'react';
import './Main.css';
// import Cobain from './Cobain.js';
import Board from "./Board.js";

class App extends Component {

  render() {
    return (
      <div className="Main">
        <Board />
      </div>
    );
  }
}

export default App;