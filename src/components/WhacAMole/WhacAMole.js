import React, { useState } from "react";
import MoleHill from "./MoleHill";
import './WhacAMole.css';

const WhacAMole = () => {
  const [moleHill, setMoleHill] = useState([
    { id: 1, img: '/img/mole/mole.jpg', stat: ''},
    { id: 2, img: '/img/mole/mole.jpg', stat: ''},
    { id: 3, img: '/img/mole/mole.jpg', stat: ''},
    { id: 4, img: '/img/mole/mole.jpg', stat: ''},
    { id: 5, img: '/img/mole/mole.jpg', stat: ''},
    { id: 6, img: '/img/mole/mole.jpg', stat: ''},
  ])
  // .sort(() => Math.random() - 0.5)

  return (
    <>
      <h1 className="moleTitle">Whac-A-Mole</h1>
      <div className="moleGrid">
        { moleHill.map((moleHill, index) => (
          <MoleHill moleHill={moleHill} index={index} id={index}>yes</MoleHill>
        )) }
      </div>
    </>
  )
}

export default WhacAMole;