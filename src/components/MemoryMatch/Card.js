import React from "react";
// import './MemoryMatch.css';

const Card = ({item, id, handleCardClick}) => {
  const itemClass = item.stat ? ' active ' + item.stat : '';

  return (
    <div className={'card' + itemClass} onClick={() => handleCardClick(id)} >
      <img src={item.img} alt=''/>
    </div>
  )
}

export default Card;