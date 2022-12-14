import React from "react";
import './MemoryMatch.css'

const MemoModal = () => {

  return (
    <div className='memoModal'>
      <div className='memoModalOverlay'></div>
      <div className='memoModalContent'>
        <h1>You Won! Click the button to try again.</h1>
        <h3>Refresh the page to play again.</h3>
      </div>
    </div>
  )
}

export default MemoModal;