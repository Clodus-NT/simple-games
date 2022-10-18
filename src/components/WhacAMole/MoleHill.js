import React from "react";

const MoleHill = ({moleHill, setMoleHill, id }) => {
  // const moleHillClass = moleHill.active ? true + moleHill.active : '';
  // console.log('molehillclass: ', moleHillClass)
  // const [isMoleActive, setIsMoleActive] = useState(false);

  // const displayRandomMole = () => {
  //   let randomMole = moleHill[Math.floor(Math.random() * moleHill.length)];
  //   console.log(randomMole)
  // }

  // displayRandomMole();

  
  return (
    <div className='hillTile'>
      {moleHill.active = true && <img className='hillTileImg' src={'/img/mole/mole.jpg'} alt=''/>}
      {/* {isMoleActive && <img className='hillTileImg' src={'/img/mole/mole.jpg'} alt=''/>} */}
      {/* <img className='hillTileImg' src={'/img/mole/mole.jpg'} alt=''/> */}
    </div>
  )
}

export default MoleHill;