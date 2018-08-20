const GamePiece = require('./GamePiece');

// extend GamePiece class
module.exports = class Snake extends GamePiece {
  constructor(x, y, height, width, color, borderColor) {
    // invoke parent class constructor
    super(x, y, height, width, color);

    this.borderColor = borderColor;
    this.selfCollide = false;
    this.snakeTail = [160, y];
    this.snakeBlocks = [];
    this.snakeBlocks.push([x, y]);
    this.snakeBlocks.push([180, y]);
    this.snakeBlocks.push([160, y]);
  } 

  drawSnake(ctx) {
    for (var i = 0; i < this.snakeBlocks.length; i++) {
      this.draw(ctx, this.snakeBlocks[i]);
    };
  }

  collidesWithSelf() {
    let snake = this.snakeBlocks;
    let snakeBody = snake.filter((headlessSnake) => {
      return headlessSnake !== snake[0];
    });
    
    snakeBody.forEach((bodyBlocks) => {
      this.checkSelfCollision(bodyBlocks)
    })
  }

  checkSelfCollision(bodyBlocks) {
    let snakeHead = this.snakeBlocks[0];

    if (bodyBlocks[0] === snakeHead[0] && bodyBlocks[1] === snakeHead[1]) {
        this.selfCollide = true;
    } else {
        return;
    }
  }

  draw(ctx, snakeBlock) {
    const {height, width, color, borderColor } = this;
    let x = snakeBlock[0];
    let y = snakeBlock[1];
    
    // draw snakeBlock
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);

    // draw block border
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
  }

  checkFoodCollision(value, direction) {

    if (value) {
      this.growSnake();
      this.move(direction);
    } else {
      this.move(direction);
    };
  }

  move(direction) {
    let nextPosition = this.snakeBlocks[0].slice();
     
    if (direction === 'right') {
      nextPosition[0] += 20;
    } else if (direction === 'left') {
      nextPosition[0] = nextPosition[0] - 20;
    } else if (direction === 'up') {
      nextPosition[1] = nextPosition[1] - 20;
    } else if (direction === 'down') {
      nextPosition[1] += 20;
    }

    this.snakeBlocks.unshift(nextPosition);
    let endBlockRight = this.snakeBlocks.pop();
    this.snakeTail = endBlockRight
  }
  
  growSnake() {
    let newBlock = this.snakeTail
    this.snakeBlocks.push(newBlock);
  }

  isCollidingWith(object, direction) {
    let snakeHead = this.snakeBlocks[0];
    let snakeBody = this.snakeBlocks[1]

      if (snakeHead[0] === (object.x - object.width) - 20 &&
      snakeHead[1] === object.y && direction === 'right') {
        return true;
      } else if (snakeHead[0] === (object.x + object.width) + 20 &&
      snakeHead[1] === object.y && direction === 'left') {
        return true;
      } else if (snakeHead[0] === object.x &&
      snakeHead[1] === (object.y + object.height) + 20 && direction === 'up') {
        return true;
      } else if (snakeHead[0] === object.x &&
      snakeHead[1] === (object.y - object.height) - 20 && direction === 'down') {
        return true;
      } else if (snakeHead[0] === object.x && snakeHead[1] === object.y) {
        return true;
      } else if (snakeBody[0] === object.x && snakeBody[1] === object.y) {
        return true;
      } else {
        return false;
      };

  }

  isCollidingWithWall(canvasWidth, canvasHeight) {
    let snakeHead = this.snakeBlocks[0];
    return (
      snakeHead[0] < 0 ||
      snakeHead[0] + (this.width)> canvasWidth ||
      snakeHead[1] < 0 || 
      snakeHead[1] + (this.height) > canvasHeight
    )
  }
}