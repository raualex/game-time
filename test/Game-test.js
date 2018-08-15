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

  it.skip('should detect if snake collides with food', () => {
    const snake = game.snake;
    const food = game.food;
    
    snake.x = food.x;

    let colliding = snake.isCollidingWith(food)

    assert.equal(colliding, true)

  })
  it.skip('should end game', () => {})
  it.skip('should collide with walls', () => {})
  it.skip('should be able to move', () => {})
  it.skip('should be able to changeDirection', () => {})
});