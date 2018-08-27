const { assert } = require('chai');
const Snake = require('../lib/Block.js');
const Game = require('../lib/Game.js');

const ctx = {
  canvas: {
    width: 300,
    height: 300
  }
};

describe('Snake', () =>{

  let snake;

  beforeEach(() => {
    snake = new Snake(200, 20, 20, 20, 'black', 'rgb(164, 194,  61)')
  });

  it('should be able to take properties', () => {  
      
    assert.deepEqual(snake, {
      x: 200,
      y: 20,
      height: 20,
      width: 20,
      color: 'black',
      borderColor: 'rgb(164, 194,  61)',
      selfCollide: false,
      snakeBlocks: [ [200, 20], [180, 20], [160, 20] ],
      snakeTail: [160, snake.y],
    });

  });

  it('should be able to check if it collides with itself', () => {
    let snakeBody = snake.snakeBlocks[1, 2];
    
    snakeBody.forEach((bodyBlocks) => {
      snake.checkSelfCollision(bodyBlocks);
    
    assert.equal(snake.selfCollide, false);
    });

  });

})