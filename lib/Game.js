const Snake = require('./Block');
const Food = require('./Food');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    this.snake = new Snake(50, 50, 40, 40, 'green', 'black');

    this.food = new Food(Math.floor(Math.random() * (660 - 1)) + 1, Math.floor(Math.random() * (610 - 1)) + 1, 40, 40, 'red');
  }

  // draw one frame of our game
  animate() {
      let snake = this.snake;
      let food = this.food;
      this.handleSnake(snake);

      snake.draw(this.ctx);
      food.draw(this.ctx);
  }


  handleSnake(snake) {
    const { canvas } = this.ctx;
    
    if (snake.isCollidingWithWall(canvas.width, canvas.height)) {
        this.endGame(); 
      } else {
        snake.move();
      }
  }

  endGame() {
    this.gameOver = true;
  }

  isOver() {
    return this.gameOver;
  }

  togglePause() {
    this.paused = !this.paused;
  }

  handleKeyPress(e) {
    const direction = {
      dx: 0,
      dy: 0
    };

    if (e.key === 'ArrowRight') {
      direction.dx = 1;

    } else if (e.key === 'ArrowLeft') {
      direction.dx = -1;

    } else if (e.key === 'ArrowDown') {
      direction.dy = 1;

    } else if (e.key === 'ArrowUp') {
      direction.dy = -1;
    } 

    this.snakes.forEach( snake => snake.changeDirection(direction) );
  }

}