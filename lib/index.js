const Game = require('./Game');
const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
let game = new Game(ctx);

window.onload = game.drawTitle(ctx);
window.addEventListener('keyup', startGame)
// Start animation loop

function startGame(e) {
let score = document.querySelector('.score');
let lives = document.querySelector('.lives');
let lifeCount = lives.innerText
let scoreCount = score.innerText

if (e.key === 'Enter' && lifeCount > '0') {
  window.requestAnimationFrame(gameLoop);
} else if (e.key === 'Enter' && lifeCount === '0') {
  let game = new Game(ctx);
  lifeCount = game.lives;
  scoreCount = game.score;
  window.requestAnimationFrame(gameLoop);
} else {
  return
}
}

function gameLoop () {
  let lives = document.querySelector('.lives');
  let lifeCount = lives.innerText

  if (game.isOver() && lifeCount > '0') {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '52px VT323'
    ctx.textAlign = 'center'
    ctx.fillText('YOU SUCK', 250, 210)
    ctx.fillText('PRESS ENTER TO', 250, 260)
    ctx.fillText('TRY AGAIN', 250, 310)
    game.generateNewSnake();
    game.gameOver = false;
    return

  } else if (game.isOver() && lifeCount === '0') {
    console.log('dead')
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '52px VT323'
    ctx.textAlign = 'center'
    ctx.fillText('YOU DEAD', 250, 210)
    ctx.fillText('PRESS ENTER TO', 250, 260)
    ctx.fillText('START ANEW', 250, 310)
    game.generateNewSnake();
    game.gameOver = false;
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
