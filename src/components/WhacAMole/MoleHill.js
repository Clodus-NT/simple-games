import React from "react";

const MoleHill = ({moleHill, id }) => {
  const moleHillClass = moleHill.stat ? ' active ' + moleHill.stat : '';

  return (
    <div>
      <img className='hillTile' src={moleHill.img} alt=''/>
    </div>
  )
}

export default MoleHill;