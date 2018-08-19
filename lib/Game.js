const Snake = require('./Block');
const Food = require('./Food');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.snake = new Snake(200, 40, 20, 20, 'green', 'black');
    this.food = new Food(Math.floor(Math.random() * (24 - 1)) + 1, Math.floor(Math.random() * (24 - 1)) + 1, 20, 20, 'red', 'red');
  }

  // draw one frame of our game
  animate() {
      let snake = this.snake;
      let food = this.food;
      this.handleSnake(snake, food);
      snake.drawSnake(this.ctx);
      food.draw(this.ctx);
  }

  handleSnake(snake, food) {
    const { canvas } = this.ctx;
    snake.collidesWithSelf()
    let collision = snake.selfCollide

    if (snake.isCollidingWithWall(canvas.width, canvas.height)) {
        this.endGame();  
      } else if (snake.isCollidingWith(food)) {
        this.reproduceFood(food);
        snake.checkFoodCollision(true);
      } else if (collision === true) {
        this.endGame();
      }  else {
        snake.checkDirection();
      }
  }

  
  reproduceFood(food) {
    this.ctx.clearRect(food.x, food.y, food.width, food.height);
    let newFood = new Food(Math.floor(Math.random() * (24 - 1)) + 1, Math.floor(Math.random() * (24 - 1)) + 1, 20, 20, 'red');
    let snake = this.snake

    snake.snakeBlocks.forEach((iteration) => {
      this.checkFoodAgainstSnake(iteration, newFood)
    })
  }

  checkFoodAgainstSnake(iteration, newFood) {
    do {
    newFood = new Food(Math.floor(Math.random() * (24 - 1)) + 1, Math.floor(Math.random() * (24 - 1)) + 1, 20, 20, 'red');
    } while (newFood.x === iteration[0] && newFood.y === iteration[1])
    this.food = newFood;
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