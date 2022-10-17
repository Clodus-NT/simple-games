import React from "react";

const MoleHill = ({moleHill, id }) => {
  const moleHillClass = moleHill.stat ? ' active ' + moleHill.stat : '';

  return (
    <div className="hillTile">
      <img className='hillTileImg' src={moleHill.img} alt=''/>
    </div>
  )
}

export default MoleHill;