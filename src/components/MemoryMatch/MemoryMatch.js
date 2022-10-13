import React from "react";
import './MemoryMatch.css';
import CardImages from './CardImages';

const MemoryMatch = () => {

  return (
    <div>
      <h1 className='memoTitle' >Memory Match</h1>
      <div className="memoGameContainer">
        <CardImages />
      </div>
    </div>
  )
}

export default MemoryMatch;