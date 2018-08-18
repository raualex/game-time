const Snake = require('./Block');
const Food = require('./Food');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.snake = new Snake(200, 40, 20, 20, 'green', 'black');
    this.food = new Food(Math.floor(Math.random() * (480 - 1)) + 1, Math.floor(Math.random() * (480 - 1)) + 1, 20, 20, 'red', 'red');
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
        snake.checkDirection();
      } else {
        snake.checkDirection();
      }
  }

  // lengthenSnake(snake) {
  //   if (snake.dx === 1 || snake.dx === -1) {
  //     snake.width += 40;
  //   } else {
  //     snake.height += 40;
  //   }
  // }
  
  reproduceFood(food) {
    this.food = new Food(Math.floor(Math.random() * (480 - 1)) + 1, Math.floor(Math.random() * (480 - 1)) + 1, 20, 20, 'red');
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
    let snake = this.snake;
  
    if (e.key === 'ArrowRight') {
      snake.moveRight();
    } else if (e.key === 'ArrowLeft') {
      snake.moveLeft();
    } else if (e.key === 'ArrowDown') {
      snake.moveDown();
    } else if (e.key === 'ArrowUp') {
      snake.moveUp();
    }
  }
}