// GamePiece-test.js
const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece.js');

describe('GamePiece', () => {
  
  let gamePiece;

  beforeEach(() => {
    gamePiece = new GamePiece(30, 30, 10, 10, 'green');
  });


  it('should take properties', () => {

    assert.deepEqual(gamePiece, {
      x: 30,
      y:30,
      height: 10,
      width: 10,
      color: 'green',
      dx: 1,
      dy: 0,
      dxv: 1,
      dyv: 1
    });
  });

  it('should collide with a second gamepiece that occupies the same space', () => {
    const gamePiece2 = new GamePiece(30, 30, 10, 10, 'red');
    const gamePiece3 = new GamePiece(50, 50, 10, 10, 'green');
    const gamePiece4 = new GamePiece(80, 80, 10, 10, 'red');

    const colliding = gamePiece.isCollidingWith(gamePiece2);
    assert.equal(colliding, true);

    const notColliding = gamePiece3.isCollidingWith(gamePiece4);
    assert.equal(notColliding, false);
  });

  it.skip('should collide with walls', () => {})
  it.skip('should be able to move', () => {})
  it.skip('should be able to changeDirection', () => {})
})