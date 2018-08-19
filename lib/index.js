const Game = require('./Game');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);

// Start animation loop
window.requestAnimationFrame(gameLoop);

function gameLoop () {

  // //draw background
  // ctx.fillStyle = '#a4c23d';
  // ctx.fillRect(600, 600, canvas.width, canvas.height);


  if (game.isOver()) {
    console.log('game over')
    return
  } else {
    // clear previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);
 //draw background
  ctx.fillStyle = '#a4c23d';
  ctx.fillRect(600, 600, canvas.width, canvas.height);
    // draw this frame
    game.animate();
  }

  // prepare to draw next frame
  window.setTimeout(gameLoop, 500);
}

// Add key press event handler
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  game.handleKeyPress(e);
}
