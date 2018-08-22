const Snake = require('./Block');
const Food = require('./Food');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.direction = 'right';
    this.speed = 450;
    this.score = 0;
    this.lives = 5;
    this.snake = new Snake(200, 40, 20, 20, 'black', 'rgb(164, 194,  61)');
    this.food = new Food(Math.floor(Math.random() * (24 - 1)) + 1, Math.floor(Math.random() * (24 - 1)) + 1, 20, 20, 'black', 'rgb(164, 194,  61)');
  }

  drawTitle(ctx) {
    ctx.font = '52px VT323';
    ctx.textAlign = 'center';
    ctx.fillText('PRESS ENTER KEY', 250, 120);
    ctx.fillText('TO START', 250, 170);
    this.drawControlTitle(ctx);
  }

  drawControlTitle(ctx) {
    ctx.font = '42px VT323';
    ctx.textAlign = 'center';
    ctx.fillText('Controls:', 250, 280);
    this.drawControls(ctx);
  }

  drawControls(ctx) {
    ctx.font = '30px VT323';
    ctx.textAlign = 'center';
    ctx.fillText('- Use arrow keys to change direction', 250, 340);
    ctx.fillText('- Try not to die, plebeian', 250, 400);
  }

  animate() {
    let snake = this.snake;
    let food = this.food;

    this.handleSnake(snake, food);
    snake.drawSnake(this.ctx);
    food.draw(this.ctx);
  }

  generateNewSnake() {
    this.snake = new Snake(200, 40, 20, 20, 'black', 'rgb(164, 194,  61)');
    this.food = new Food(Math.floor(Math.random() * (24 - 1)) + 1, Math.floor(Math.random() * (24 - 1)) + 1, 20, 20, 'black', 'rgb(164, 194,  61)');
    this.direction = 'right';
    this.speed = 450;
  }

  handleSnake(snake, food) {
    const { canvas } = this.ctx;

    snake.collidesWithSelf();
    let collision = snake.selfCollide;

    if (snake.isCollidingWithWall(canvas.width, canvas.height)) {
      this.endGame();
    } else if (snake.isCollidingWith(food, this.direction)) {
      this.increaseScore();
      this.reproduceFood(food);
      snake.checkFoodCollision(true, this.direction);
    } else if (collision === true) {
      this.endGame();
    } else {
      snake.move(this.direction);
    }
  }

  reproduceFood(food) {
    this.ctx.clearRect(food.x, food.y, food.width, food.height);
    let snake = this.snake;

    snake.snakeBlocks.forEach((iteration) => {
      this.checkFoodAgainstSnake(iteration);
    });
  }

  checkFoodAgainstSnake(iteration, newFood) {
    do {
      newFood = new Food(Math.floor(Math.random() * (24 - 1)) + 1, Math.floor(Math.random() * (24 - 1)) + 1, 20, 20, 'black');
      this.food = newFood;
    } while (newFood.x === iteration[0] && newFood.y === iteration[1]);
  }

  increaseScore() {
    let scoreBox = document.querySelector('.score');

    this.score += 10;
    scoreBox.innerText = this.score;
    
    if (this.score % 50 === 0) {
      this.speed = this.speed - 50;
    } else {
      return;
    } 
  }

  decreaseLives() {
    let lifeCount = document.querySelector('.lives');

    if (this.lives > 0) {
      this.lives--;
      lifeCount.innerText = this.lives;
    } else if (this.lives === 0) {
      return;
    }
  }

  endGame() {
    this.gameOver = true;
  }

  resetInfo() {
    this.lives = 5;
    this.score = 0; 
  }

  isOver() {
    return this.gameOver;
  }

  togglePause() {
    this.paused = !this.paused;
  }

  handleKeyPress(e) {
    e.preventDefault();
  
    if (e.key === 'ArrowRight' && this.direction !== 'left') {
      this.direction = 'right';
    } else if (e.key === 'ArrowLeft' && this.direction !== 'right') {
      this.direction = 'left';
    } else if (e.key === 'ArrowDown' && this.direction !== 'up') {
      this.direction = 'down';
    } else if (e.key === 'ArrowUp' && this.direction !== 'down') {
      this.direction = 'up';
    }
  }

};