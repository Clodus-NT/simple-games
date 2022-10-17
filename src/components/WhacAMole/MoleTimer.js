import React, { useState, useEffect } from "react";
import './WhacAMole.css';

const MoleTimer = () => {
  const [moleTimer, setMoleTimer] = useState(30);
  const [moleTimerOn, setMoleTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (moleTimer > 0 && moleTimerOn) {
      interval = setInterval(() => {
        setMoleTimer(prevTime => prevTime - 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [moleTimer, moleTimerOn])

  return (
    <>
      <h2 className="moleTimer">Time Left: {moleTimer}s</h2>
      <div className="moleBtn">
        <button className='moleStartBtn' onClick={() => setMoleTimerOn(true)}>Start</button>
        <button className='moleStartBtn' onClick={() => setMoleTimerOn(false)}>Stop</button>
      </div>

    </>
  )
}

export default MoleTimer;