const Game = require('./Game');
const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
let game = new Game(ctx);
let score = document.querySelector('.score');
let lives = document.querySelector('.lives');

window.onload = game.drawTitle(ctx);
window.addEventListener('keyup', startGame);
document.addEventListener('keydown', handleKeyPress);

function startGame(e) {
  let lifeCount = lives.innerText;

  if (e.key === 'Enter' && lifeCount > '0') {
    window.requestAnimationFrame(gameLoop);
  } else if (e.key === 'Enter' && lifeCount === '0') {
    lives.innerText = 5;
    score.innerText = 0;
    game.resetInfo();
    window.requestAnimationFrame(gameLoop);
  } else {
    return;
  }
}

function gameLoop () {

  if (game.isOver() && game.lives > 1) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTryAgain();
    game.decreaseLives();
    game.generateNewSnake();
    game.gameOver = false;
    return;
  } else if (game.isOver() && game.lives === 1) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStartOver();
    game.generateNewSnake();
    game.decreaseLives();
    game.gameOver = false;
    return;
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.animate();
  }

  window.setTimeout(gameLoop, game.speed);
}

function drawTryAgain() {
  ctx.font = '52px VT323';
  ctx.textAlign = 'center';
  ctx.fillText('YOU SUCK', 250, 210);
  ctx.fillText('PRESS ENTER TO', 250, 260);
  ctx.fillText('TRY AGAIN', 250, 310);
}

function drawStartOver() {
  ctx.font = '52px VT323';
  ctx.textAlign = 'center';
  ctx.fillText('YOU DEAD', 250, 210);
  ctx.fillText('PRESS ENTER TO', 250, 260);
  ctx.fillText('START ANEW', 250, 310);
}

function handleKeyPress(e) {
  game.handleKeyPress(e);
}
