import React from "react";
import MoleEngine from "./MoleEngine";
import './WhacAMole.css';

const WhacAMole = () => {
  // const [moleScore, setMoleScore] = useState(0);

  return (
    <>
      <h1 className="moleTitle">Whac-A-Mole</h1>
      <MoleEngine />
    </>
  )
}

export default WhacAMole;