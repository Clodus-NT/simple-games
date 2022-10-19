import React, { useRef, useEffect } from 'react';
import BallMovement from './BallMovement';
import WallCollision from './utility/WallCollision';
import { BreakoutData } from '../../BreakoutData';
import './Breakout.css';
import PaddleMovement from './PaddleMovement';
import Brick from './Brick';
import BrickCollision from './utility/BrickCollision';
import PaddleCollision from './utility/PaddleCollision';
import PlayerStats from './PlayerStats';

let bricks = [];
let {ballObj, paddleProps, brickObj, player} = BreakoutData;

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

      //Player
      PlayerStats(ctx, player, canvas, brickObj);

      //Display Bricks
      bricks.map((brick) => {
        return brick.draw(ctx);
      })

      BallMovement(ctx, ballObj);

      WallCollision(ballObj, canvas);

      let brickCollision;
      for (let i = 0; i < bricks.length; i++) {
        brickCollision = BrickCollision(ballObj, bricks[i]);

        if (brickCollision.hit && !bricks[i].broke) {
          if (brickCollision.axis === 'X') {
            ballObj.dx *= -1;
            bricks[i].broke = true;
          } else if (brickCollision.axis ==='Y') {
            ballObj.dy *= -1;
            bricks[i].broke = true;
          }
        }
      }

      PaddleMovement(ctx, canvas, paddleProps);

      PaddleCollision(ballObj, paddleProps);

      requestAnimationFrame(render);
    }
    render();

  }, [])



  return (
    <canvas 
      className='breakoutCanvas' 
      height="500px" 
      // width="800px"
      onMouseMove={(event) => {
        paddleProps.x = 
        event.clientX - 
        (window.innerWidth < 900 ? 10 : (window.innerWidth * 20) / 200) - 
        paddleProps.width / 2 - 10
      }}
      width={
        window.innerWidth < 900
          ? window.innerWidth - 20
          : window.innerWidth - (window.innerWidth * 20) / 100
      }
      ref={canvasRef}
    />
  )
}
