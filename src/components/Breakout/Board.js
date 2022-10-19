import React, { useRef, useEffect } from 'react';
import BallMovement from './BallMovement';
import WallCollision from './utility/WallCollision';
import { BreakoutData } from '../../BreakoutData';
import './Breakout.css';
import PaddleMovement from './PaddleMovement';
import Brick from './Brick';

let bricks = [];
let {ballObj, paddleProps, brickObj} = BreakoutData;

export default function Board() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      paddleProps.y = canvas.height - 30;

      //Assign Bricks
      let newBrickSet = Brick(2, bricks, canvas, brickObj)

      if (newBrickSet && newBrickSet.length > 0) {
        bricks = newBrickSet;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      //Display Bricks
      bricks.map((brick) => {
        return brick.draw(ctx);
      })

      BallMovement(ctx, ballObj);

      WallCollision(ballObj, canvas);

      PaddleMovement(ctx, canvas, paddleProps);

      requestAnimationFrame(render);
    }
    render();

  }, [])



  return (
    <canvas 
      className='breakoutCanvas' 
      height="500px" 
      // width="800px"
      onMouseMove={(event) => paddleProps.x = event.clientX - paddleProps.width / 2 - 10}
      width={
        window.innerWidth < 900
          ? window.innerWidth - 20
          : window.innerWidth - (window.innerWidth * 20) / 100
      }
      ref={canvasRef}
    />
  )
}
