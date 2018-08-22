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
    });
  });

})