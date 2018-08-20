const Game = require('./Game');
const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);

window.onload = game.drawTitle(ctx);
window.addEventListener('keyup', startGame)
// Start animation loop

function startGame(e) {

  if (e.key === 'Enter') {
window.requestAnimationFrame(gameLoop);
} else {
  return
}
}

function gameLoop () {

  if (game.isOver()) {
    // console.log('game over')
    return
  } else {
    // clear previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw this frame
    game.animate();
  }

  // prepare to draw next frame
  window.setTimeout(gameLoop, game.speed);
}

// Add key press event handler
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  game.handleKeyPress(e);
}
