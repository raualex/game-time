const GamePiece = require('./GamePiece');

// extend GamePiece class
module.exports = class Snake extends GamePiece {
  constructor(x, y, height, width, color, borderColor) {
    // invoke parent class constructor
    super(x, y, height, width, color);

    this.borderColor = borderColor;

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
  }

  moveLeft() {
    let nextPosition = this.snakeBlocks[0].slice();
      nextPosition[0] = nextPosition[0] - 20;
      this.snakeBlocks.unshift(nextPosition);
      this.snakeBlocks.pop();
  }

  moveUp() {
    let nextPosition = this.snakeBlocks[0].slice();
      nextPosition[1] = nextPosition[1] - 20;
      this.snakeBlocks.unshift(nextPosition);
      this.snakeBlocks.pop();
  }

  moveDown() {
    let nextPosition = this.snakeBlocks[0].slice();
      nextPosition[1] += 20;
      this.snakeBlocks.unshift(nextPosition);
      this.snakeBlocks.pop();
  }

  isCollidingWith(object) {
    let snakeHead = this.snakeBlocks[0];
    return (
      snakeHead[0] < object.x + object.width && 
      snakeHead[0] + (this.width + 20) > object.x &&
      snakeHead[1] < object.y + object.height &&
      snakeHead[1] + (this.height + 20) > object.y
    );
  }

  isCollidingWithWall(canvasWidth, canvasHeight) {
    let snakeHead = this.snakeBlocks[0];
    return (
      snakeHead[0] < 0 ||
      snakeHead[0] + (this.width + 20)> canvasWidth ||
      snakeHead[1] < 0 || 
      snakeHead[1] + (this.height + 20) > canvasHeight
    )
  }
}