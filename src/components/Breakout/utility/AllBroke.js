import { BreakoutData } from "../../../BreakoutData";
import ResetBall from "./ResetBall";

export default function AllBroke(bricks, player, canvas, ballObj) {
  let {brickObj, paddleProps} = BreakoutData;
  let total = 0;
  for (let i = 0; i < bricks.length; i++) {
    if (bricks[i].broke === true) {
      total++;
    }
  }
  if (total === bricks.length) {
    alert('Level Complete')
    player.level++;
    ResetBall(ballObj, canvas, paddleProps);
    ballObj.y = canvas.height - 20;
    brickObj.y = 50;
  }
}
