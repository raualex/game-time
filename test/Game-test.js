// Game-test.js
const { assert } = require('chai');
const Game = require('../lib/Game.js');

const ctx = {
  canvas: {
    width: 300,
    height: 300
  }
};

describe('Game', () => {

  it('should end game if snake collides with wall', () => {
    const game = new Game(ctx);
    const snake = game.snake;
    const snakeHead = snake.snakeBlocks[0]

    snakeHead[0] = ctx.canvas.width;

    game.handleSnake(snake);

    assert.isTrue(game.gameOver);
  });

  it('should detect if snake collides with food', () => {
    const game = new Game(ctx);
    const snake = game.snake;
    const food = game.food;
    const snakeHead = snake.snakeBlocks[0];

    snakeHead[0] = food.x;
    snakeHead[1] = food.y;

    let colliding = snake.isCollidingWith(food);

    assert.equal(colliding, true);

  })

  it('snake should be able to move', () => {
    const game = new Game(ctx);
    const snake = game.snake;
    const snakeHead = snake.snakeBlocks[0];
    
    assert.deepEqual(snake.snakeBlocks[0], [200, 40])
    snake.move('right');
    assert.deepEqual(snake.snakeBlocks[0], [220, 40])   
  })

  it('snake should be able to changeDirection', () => {
    const game = new Game(ctx);
    const snake = game.snake;
    
    snake.move('right');
    snake.move('right');
    snake.move('right');
    assert.deepEqual(snake.snakeBlocks[0], [260, 40]);
    snake.move('up');
    assert.deepEqual(snake.snakeBlocks[0], [260, 20]);
  })

});





