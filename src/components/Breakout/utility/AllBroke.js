export default function AllBroke(bricks, player, canvas, ballObj) {
  let total = 0;
  for (let i = 0; i < bricks.length; i++) {
    if (bricks[i].broke === true) {
      total++;
    }
  }
  if (total === bricks.length) {
    // alert('Level Complete')
    player.level++;
    ballObj.y = canvas.height - 20;
  }
}
