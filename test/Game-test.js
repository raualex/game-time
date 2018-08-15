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

  it('should end game if block collides with wall', () => {
    const game = new Game(ctx);
    const block = game.blocks[0];

    block.x = ctx.canvas.width;

    game.handleBlock(block);

    assert.isTrue(game.gameOver);
  });

  it.skip('should take properties', () => {})
  it.skip('should end game', () => {})
  it.skip('should collide with walls', () => {})
  it.skip('should be able to move', () => {})
  it.skip('should be able to changeDirection', () => {})
});