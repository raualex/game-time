const { assert } = require('chai');
const Food = require('../lib/Food.js');
const Game = require('../lib/Game.js');

const ctx = {
  canvas: {
    width: 300,
    height: 300
  }
};

describe('Food', () =>{

  let food;

  beforeEach(() => {
    food = new Food(10, 10, 20, 20, 'black', 'rgb(164, 194,  61)');
  });

  it('should be able to take properties', () => {
    
    assert.deepEqual(food, {
      x: 200,
      y: 200,
      height: 20,
      width: 20,
      color: 'black',
      borderColor: 'rgb(164, 194,  61)'
    });
  });

  it('should be able to appear in random spots each time its created', () => {
    let game = new Game(ctx);
    let testFood = game.food
    let foodX1 = testFood.x;
    let foodY1 = testFood.y;
    let snake = game.snake;

    snake.snakeBlocks.forEach((snakeSegment) => {
      game.checkFoodAgainstSnake(snakeSegment);
    });

    testFood = game.food;

    assert.notEqual(foodX1, testFood.x || foodY1, testFood.y);
  });

  it('should appear on same grid lines as the snake', () => {
    let testFood = new Food(Math.floor(Math.random() * (24 - 1)) + 1, Math.floor(Math.random() * (24 - 1)) + 1, 20, 20, 'black', 'rgb(164, 194,  61)');
    let game = new Game(ctx);
    let snake = game.snake;
    let snakeHead = snake.snakeBlocks[0];

    assert.equal(food.x%20, 0 && food.y%20, 0);
    assert.equal(snakeHead[0]%20, 0 && snakeHead[1]%20, 0);

  });


});