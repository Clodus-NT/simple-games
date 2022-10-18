import React, { useRef, useEffect } from 'react';
import BallMovement from './BallMovement';
import { BreakoutData } from '../../BreakoutData';
import './Breakout.css';


export default function Board() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      if(canvas === null) {return null};
      const ctx = canvas.getContext('2d');

      let {ballObj} = BreakoutData;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      BallMovement(ctx, ballObj);

      if (ballObj.y - ballObj.rad <= 0 || ballObj.y + ballObj.rad >= canvas.height) {
        ballObj.dy *= -1;
      }

      if (ballObj.x + ballObj.rad >= canvas.width || ballObj.x - ballObj.rad <= 0) {
        ballObj.dx *= -1;
      }

      requestAnimationFrame(render);
    }
    render();

  }, [])



  return (
    <canvas 
      className='breakoutCanvas' 
      height="500px" 
      // width="800px"
      width={
        window.innerWidth < 900
          ? window.innerWidth - 20
          : window.innerWidth - (window.innerWidth * 20) / 100
      }
      ref={canvasRef}
    />
  )
}
