import React, { useState, useEffect } from "react";
import './MemoryMatch.css';
import CardImages from './CardImages';

const MemoryMatch = () => {

  return (
    <div>
      <h1>Memory Match</h1>
      <div className="memoGameContainer">
        <CardImages />
      </div>
    </div>
  )
}

export default MemoryMatch;