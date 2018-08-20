const Snake = require('./Block');
const Food = require('./Food');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.speed = 500;
    this.score = 0;
    this.lives = 5;
    this.snake = new Snake(200, 40, 20, 20, 'black', 'rgb(164, 194,  61)');
    this.food = new Food(Math.floor(Math.random() * (24 - 1)) + 1, Math.floor(Math.random() * (24 - 1)) + 1, 20, 20, 'black', 'rgb(164, 194,  61)');
  }

  drawTitle(ctx) {
    // console.log('works')
    ctx.font = '52px VT323'
    ctx.textAlign = 'center'
    ctx.fillText('PRESS ENTER KEY', 250, 210)
    ctx.fillText('TO START', 250, 260)
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
      // debugger;
      this.endGame();
      this.decreaseLives(); 
    } else if (snake.isCollidingWith(food)) {
      this.increaseScore();
      this.reproduceFood(food);
      snake.checkFoodCollision(true);
    } else if (collision === true) {
      this.endGame();
      this.decreaseLives();
    }  else {
      snake.checkDirection();
    }
  }

  
  reproduceFood(food) {
    this.ctx.clearRect(food.x, food.y, food.width, food.height);
    let newFood = new Food(Math.floor(Math.random() * (24 - 1)) + 1, Math.floor(Math.random() * (24 - 1)) + 1, 20, 20, 'black', 'rgb(164, 194,  61)');
    let snake = this.snake

    snake.snakeBlocks.forEach((iteration) => {
      this.checkFoodAgainstSnake(iteration, newFood)
    })
  }

  increaseScore() {
    let scoreBox = document.querySelector('.score');
    this.score += 10
 
    scoreBox.innerText = this.score
    
    if (this.score % 50 === 0) {
    this.speed = this.speed - 50
  } else {
    return
  }
    
  }

  checkFoodAgainstSnake(iteration, newFood) {
    do {
    newFood = new Food(Math.floor(Math.random() * (24 - 1)) + 1, Math.floor(Math.random() * (24 - 1)) + 1, 20, 20, 'black');
    } while (newFood.x === iteration[0] && newFood.y === iteration[1])
    this.food = newFood;
  }

  decreaseLives() {
    let scoreBox = document.querySelector('.score');
    let lifeCount = document.querySelector('.lives');

    if (this.lives > 0) {
      this.lives--
      // console.log(this.lives)
      lifeCount.innerText = this.lives
    } else {
      this,score = 0;
      scoreBox.innerText = this.score
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
    e.preventDefault();
    let snake = this.snake;
  
    if (e.key === 'ArrowRight' && snake.direction !== 'left') {
      snake.moveRight();
    } else if (e.key === 'ArrowLeft' && snake.direction !== 'right') {
      snake.moveLeft();
    } else if (e.key === 'ArrowDown' && snake.direction !== 'up') {
      snake.moveDown();
    } else if (e.key === 'ArrowUp' && snake.direction !== 'down') {

      snake.moveUp();
    }

  }
}