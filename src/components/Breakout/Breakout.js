import React from "react";
import Board from "./Board";
import './Breakout.css';

const Breakout = () => {
  return (
    <div className="breakoutWrapper">
      <h1 className="breakoutTitle">Breakout</h1>
      <Board />
    </div>    
  )
}

export default Breakout;