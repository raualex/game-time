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

    snake.x = ctx.canvas.width;

    game.handleSnake(snake);

    assert.isTrue(game.gameOver);
  });

  it('should detect if snake collides with food', () => {
    const game = new Game(ctx);
    const snake = game.snake;
    const food = game.food;

    snake.x = food.x;
    snake.y = food.y;

    let colliding = snake.isCollidingWith(food);

    assert.equal(colliding, true);

  })

  it('should be able to move', () => {
    const game = new Game(ctx);
    const snake = game.snake;

    assert.equal(snake.dx, 1 || snake.dy, 1);
    assert.equal(snake.dxv, 1 || snake.dyv, 1);    
  })

  it('should be able to changeDirection', () => {
    const game = new Game(ctx);
    const snake = game.snake;
    const fakeKeyPress = { key: 'ArrowLeft' };

    game.handleKeyPress(fakeKeyPress);
    assert.equal(snake.dx, -1);
  })

});





