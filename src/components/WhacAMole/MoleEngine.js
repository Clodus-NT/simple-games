import React, { useState, useEffect } from "react";
import './WhacAMole.css';

const MoleEngine = () => {
  const [moleTimer, setMoleTimer] = useState(30);
  const [moleTimerOn, setMoleTimerOn] = useState(false);
  const [moleScore, setMoleScore] = useState(0);
  const [randomMole, setRandomMole] = useState(0);



  useEffect(() => {
    let interval = null;

    if (moleTimer > 0 && moleTimerOn) {
      interval = setInterval(() => {
        setMoleTimer(prevTime => prevTime - 1)
      }, 1000)
    } else {
      setMoleTimer(30);
      setMoleScore(0);
      clearInterval(interval)
    }

    if (moleTimerOn) {
      setRandomMole(Math.floor(Math.random() * 9) + 1);
    }

    return () => clearInterval(interval)
  }, [moleTimer, moleTimerOn, randomMole, moleScore])

  const moleClick = () => {
    setMoleScore(prevScore => prevScore + 1)
  }

  return (
    <>
    <h2 className="moleTimer">Timer: {moleTimer}s</h2>
    <h2 className="moleTitle">Score: {moleScore}</h2>
    <div className="moleBtn">
      <button className='moleStartBtn' onClick={() => setMoleTimerOn(true)}>Start</button>
      <button className='moleStartBtn' onClick={() => setMoleTimerOn(false)}>Reset</button>
    </div>
    <div className="moleGrid">
      <div className='hillTile'>
        {randomMole === 1 && moleTimerOn ? <img className='hillTileImg' src={'/img/mole/mole.jpg'} alt='' onClick={moleClick}/> : <div></div>}
      </div>
      <div className='hillTile'>
        {randomMole === 2 && moleTimerOn ? <img className='hillTileImg' src={'/img/mole/mole.jpg'} alt='' onClick={moleClick}/> : <div></div>}
      </div>
      <div className='hillTile'>
        {randomMole === 3 && moleTimerOn ? <img className='hillTileImg' src={'/img/mole/mole.jpg'} alt='' onClick={moleClick}/> : <div></div>}
      </div>
      <div className='hillTile'>
        {randomMole === 4 && moleTimerOn ? <img className='hillTileImg' src={'/img/mole/mole.jpg'} alt='' onClick={moleClick}/> : <div></div>}
      </div>
      <div className='hillTile'>
        {randomMole === 5 && moleTimerOn ? <img className='hillTileImg' src={'/img/mole/mole.jpg'} alt='' onClick={moleClick}/> : <div></div>}
      </div>
      <div className='hillTile'>
        {randomMole === 6 && moleTimerOn ? <img className='hillTileImg' src={'/img/mole/mole.jpg'} alt='' onClick={moleClick}/> : <div></div>}
      </div>
      <div className='hillTile'>
        {randomMole === 7 && moleTimerOn ? <img className='hillTileImg' src={'/img/mole/mole.jpg'} alt='' onClick={moleClick}/> : <div></div>}
      </div>
      <div className='hillTile'>
        {randomMole === 8 && moleTimerOn ? <img className='hillTileImg' src={'/img/mole/mole.jpg'} alt='' onClick={moleClick}/> : <div></div>}
      </div>
      <div className='hillTile'>
        {randomMole === 9 && moleTimerOn ? <img className='hillTileImg' src={'/img/mole/mole.jpg'} alt='' onClick={moleClick}/> : <div></div>}
      </div>
    </div>
    </>
  )
}

export default MoleEngine;