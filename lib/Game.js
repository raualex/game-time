const Snake = require('./Block');
const Food = require('./Food');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.snake = new Snake(200, 50, 40, 40, 'green', 'black');
    this.food = new Food(Math.floor(Math.random() * (660 - 1)) + 1, Math.floor(Math.random() * (610 - 1)) + 1, 40, 40, 'red');
  }

  // draw one frame of our game
  animate() {
      let snake = this.snake;
      let food = this.food;
      this.handleSnake(snake, food);
      snake.drawSnake(this.ctx);
      // snake.draw(this.ctx, snake.snakeBlocks);
      food.draw(this.ctx);
  }

      
  handleSnake(snake, food) {
    const { canvas } = this.ctx;
    
    if (snake.isCollidingWithWall(canvas.width, canvas.height)) {
        this.endGame();  
      } else if (snake.isCollidingWith(food)) {
        // this.lengthenSnake(snake);
        this.reproduceFood(food);
        snake.move();
      } else {
        snake.move();
      }
  }

  lengthenSnake(snake) {
    if (snake.dx === 1 || snake.dx === -1) {
      snake.width += 40;
    } else {
      snake.height += 40;
    }
  }
  
  reproduceFood(food) {
    this.food = new Food(Math.floor(Math.random() * (660 - 1)) + 1, Math.floor(Math.random() * (610 - 1)) + 1, 40, 40, 'red');
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

    this.snake.changeDirection(direction);
  }

}