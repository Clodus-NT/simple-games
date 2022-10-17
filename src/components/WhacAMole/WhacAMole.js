import React, { useState } from "react";
import MoleImages from "./MoleImages";
import MoleTimer from "./MoleTimer";
import './WhacAMole.css';

const WhacAMole = () => {
  const [moleScore, setMoleScore] = useState(0);

  return (
    <>
      <h1 className="moleTitle">Whac-A-Mole</h1>
      <MoleTimer />
      <h3 className="moleScore">Score: {moleScore}</h3>
      {/* <button className='moleStartBtn' onClick={moleCountdown}>Start</button> */}
      <div className="moleGameContainer">
        <MoleImages />
      </div>
    </>
  )
}

export default WhacAMole;