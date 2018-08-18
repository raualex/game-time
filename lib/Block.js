const GamePiece = require('./GamePiece');

// extend GamePiece class
module.exports = class Snake extends GamePiece {
  constructor(x, y, height, width, color, borderColor) {
    // invoke parent class constructor
    super(x, y, height, width, color);

    this.borderColor = borderColor;
    this.direction = null;
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

  checkDirection() {
    let snakeHead = this.snakeBlocks[0];
    let snakeBody = this.snakeBlocks[1];

    if (snakeHead[0] > snakeBody[0]) {
      this.moveRight();
    } else if (snakeHead[0] < snakeBody[0]) {
      this.moveLeft();
    } else if (snakeHead[1] > snakeBody[1]) {
      this.moveDown();
    } else if (snakeHead[1] < snakeBody[1]) {
      this.moveUp();
    }
  }

  moveRight() {
    let nextPosition = this.snakeBlocks[0].slice();
      nextPosition[0] += 20;
      this.snakeBlocks.unshift(nextPosition);
      this.snakeBlocks.pop();
      this.direction = 'right';
  }

  moveLeft() {
    let nextPosition = this.snakeBlocks[0].slice();
      nextPosition[0] = nextPosition[0] - 20;
      this.snakeBlocks.unshift(nextPosition);
      this.snakeBlocks.pop();
      this.direction = 'left';
  }

  moveUp() {
    let nextPosition = this.snakeBlocks[0].slice();
      nextPosition[1] = nextPosition[1] - 20;
      this.snakeBlocks.unshift(nextPosition);
      this.snakeBlocks.pop();
      this.direction = 'up';
  }

  moveDown() {
    let nextPosition = this.snakeBlocks[0].slice();
      nextPosition[1] += 20;
      this.snakeBlocks.unshift(nextPosition);
      this.snakeBlocks.pop();
      this.direction = 'down';
  }

  isCollidingWith(object) {
    let snakeHead = this.snakeBlocks[0];

      if (snakeHead[0] === (object.x - object.width) - 20 &&
      snakeHead[1] === object.y && this.direction === 'right') {
        return true;
      } else if (snakeHead[0] === (object.x + object.width) + 20 &&
      snakeHead[1] === object.y && this.direction === 'left') {
        return true;
      } else if (snakeHead[0] === object.x &&
      snakeHead[1] === (object.y + object.height) + 20 && this.direction === 'up') {
        return true;
      } else if (snakeHead[0] === object.x &&
      snakeHead[1] === (object.y - object.height) - 20 && this.direction === 'down') {
        return true;
      } else {
        return false;
      };

  }

  isCollidingWithWall(canvasWidth, canvasHeight) {
    let snakeHead = this.snakeBlocks[0];
    return (
      snakeHead[0] === 0 ||
      snakeHead[0] + (this.width + 20)> canvasWidth ||
      snakeHead[1] === 0 || 
      snakeHead[1] + (this.height + 20) > canvasHeight
    )
  }
}