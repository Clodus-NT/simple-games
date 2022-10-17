import React, { useState } from "react";
import MoleImages from "./MoleImages";
import './WhacAMole.css';

const WhacAMole = () => {
  const [moleHill, setMoleHill] = useState([
    { id: 1, img: '/img/mole/mole.jpg', stat: ''},
    { id: 2, img: '/img/mole/mole.jpg', stat: ''},
    { id: 3, img: '/img/mole/mole.jpg', stat: ''},
    { id: 4, img: '/img/mole/mole.jpg', stat: ''},
    { id: 5, img: '/img/mole/mole.jpg', stat: ''},
    { id: 6, img: '/img/mole/mole.jpg', stat: ''},
    { id: 7, img: '/img/mole/mole.jpg', stat: ''},
    { id: 8, img: '/img/mole/mole.jpg', stat: ''},
    { id: 9, img: '/img/mole/mole.jpg', stat: ''},
  ])
  // .sort(() => Math.random() - 0.5)

  return (
    <>
      <h1 className="moleTitle">Whac-A-Mole</h1>
      <div className="moleGameContainer">
        <MoleImages />
      </div>
    </>
  )
}

export default WhacAMole;