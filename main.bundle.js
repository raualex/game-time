/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Block.js":
/*!**********************!*\
  !*** ./lib/Block.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");

module.exports = function (_GamePiece) {
  _inherits(Snake, _GamePiece);

  function Snake(x, y, height, width, color, borderColor) {
    _classCallCheck(this, Snake);

    var _this = _possibleConstructorReturn(this, (Snake.__proto__ || Object.getPrototypeOf(Snake)).call(this, x, y, height, width, color));

    _this.borderColor = borderColor;
    _this.selfCollide = false;
    _this.snakeTail = [160, y];
    _this.snakeBlocks = [];
    _this.snakeBlocks.push([x, y]);
    _this.snakeBlocks.push([180, y]);
    _this.snakeBlocks.push([160, y]);
    return _this;
  }

  _createClass(Snake, [{
    key: 'drawSnake',
    value: function drawSnake(ctx) {
      for (var i = 0; i < this.snakeBlocks.length; i++) {
        this.draw(ctx, this.snakeBlocks[i]);
      }
    }
  }, {
    key: 'collidesWithSelf',
    value: function collidesWithSelf() {
      var _this2 = this;

      var snake = this.snakeBlocks;
      var snakeBody = snake.filter(function (headlessSnake) {
        return headlessSnake !== snake[0];
      });

      snakeBody.forEach(function (bodyBlocks) {
        _this2.checkSelfCollision(bodyBlocks);
      });
    }
  }, {
    key: 'checkSelfCollision',
    value: function checkSelfCollision(bodyBlocks) {
      var snakeHead = this.snakeBlocks[0];

      if (bodyBlocks[0] === snakeHead[0] && bodyBlocks[1] === snakeHead[1]) {
        this.selfCollide = true;
      } else {
        return;
      }
    }
  }, {
    key: 'draw',
    value: function draw(ctx, snakeBlock) {
      var height = this.height,
          width = this.width,
          color = this.color,
          borderColor = this.borderColor;

      var x = snakeBlock[0];
      var y = snakeBlock[1];

      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
      ctx.strokeStyle = borderColor;
      ctx.strokeRect(x, y, width, height);
    }
  }, {
    key: 'checkFoodCollision',
    value: function checkFoodCollision(value, direction) {
      if (value) {
        this.growSnake();
        this.move(direction);
      } else {
        this.move(direction);
      }
    }
  }, {
    key: 'move',
    value: function move(direction) {
      var nextPosition = this.snakeBlocks[0].slice();

      if (direction === 'right') {
        nextPosition[0] += 20;
      } else if (direction === 'left') {
        nextPosition[0] = nextPosition[0] - 20;
      } else if (direction === 'up') {
        nextPosition[1] = nextPosition[1] - 20;
      } else if (direction === 'down') {
        nextPosition[1] += 20;
      }

      this.snakeBlocks.unshift(nextPosition);
      var endBlockRight = this.snakeBlocks.pop();

      this.snakeTail = endBlockRight;
    }
  }, {
    key: 'growSnake',
    value: function growSnake() {
      var newBlock = this.snakeTail;

      this.snakeBlocks.push(newBlock);
    }
  }, {
    key: 'isCollidingWith',
    value: function isCollidingWith(object, direction) {
      var snakeHead = this.snakeBlocks[0];
      var snakeBody = this.snakeBlocks[1];

      if (snakeHead[0] === object.x - object.width - 20 && snakeHead[1] === object.y && direction === 'right') {
        return true;
      } else if (snakeHead[0] === object.x + object.width + 20 && snakeHead[1] === object.y && direction === 'left') {
        return true;
      } else if (snakeHead[0] === object.x && snakeHead[1] === object.y + object.height + 20 && direction === 'up') {
        return true;
      } else if (snakeHead[0] === object.x && snakeHead[1] === object.y - object.height - 20 && direction === 'down') {
        return true;
      } else if (snakeHead[0] === object.x && snakeHead[1] === object.y) {
        return true;
      } else if (snakeBody[0] === object.x && snakeBody[1] === object.y) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'isCollidingWithWall',
    value: function isCollidingWithWall(canvasWidth, canvasHeight) {
      var snakeHead = this.snakeBlocks[0];

      return snakeHead[0] < 0 || snakeHead[0] + this.width > canvasWidth || snakeHead[1] < 0 || snakeHead[1] + this.height > canvasHeight;
    }
  }]);

  return Snake;
}(GamePiece);

/***/ }),

/***/ "./lib/Food.js":
/*!*********************!*\
  !*** ./lib/Food.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");

module.exports = function (_GamePiece) {
  _inherits(Food, _GamePiece);

  function Food(x, y, height, width, color, borderColor) {
    _classCallCheck(this, Food);

    var _this = _possibleConstructorReturn(this, (Food.__proto__ || Object.getPrototypeOf(Food)).call(this, x, y, height, width, color));

    _this.x = x * 20;
    _this.y = y * 20;
    _this.borderColor = borderColor;
    return _this;
  }

  _createClass(Food, [{
    key: 'draw',
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          borderColor = this.borderColor;


      _get(Food.prototype.__proto__ || Object.getPrototypeOf(Food.prototype), 'draw', this).call(this, ctx);
      ctx.strokeStyle = borderColor;
      ctx.strokeRect(x, y, width, height);
    }
  }]);

  return Food;
}(GamePiece);

/***/ }),

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Snake = __webpack_require__(/*! ./Block */ "./lib/Block.js");
var Food = __webpack_require__(/*! ./Food */ "./lib/Food.js");

module.exports = function () {
  function Game(ctx) {
    _classCallCheck(this, Game);

    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.direction = 'right';
    this.speed = 450;
    this.score = 0;
    this.lives = 5;
    this.snake = new Snake(200, 40, 20, 20, 'black', 'rgb(164, 194,  61)');
    this.food = new Food(Math.floor(Math.random() * (24 - 1)) + 1, Math.floor(Math.random() * (24 - 1)) + 1, 20, 20, 'black', 'rgb(164, 194,  61)');
  }

  _createClass(Game, [{
    key: 'drawTitle',
    value: function drawTitle(ctx) {
      ctx.font = '52px VT323';
      ctx.textAlign = 'center';
      ctx.fillText('PRESS ENTER KEY', 250, 120);
      ctx.fillText('TO START', 250, 170);
      this.drawControlTitle(ctx);
    }
  }, {
    key: 'drawControlTitle',
    value: function drawControlTitle(ctx) {
      ctx.font = '42px VT323';
      ctx.textAlign = 'center';
      ctx.fillText('Controls:', 250, 280);
      this.drawControls(ctx);
    }
  }, {
    key: 'drawControls',
    value: function drawControls(ctx) {
      ctx.font = '30px VT323';
      ctx.textAlign = 'center';
      ctx.fillText('- Use arrow keys to change direction', 250, 340);
      ctx.fillText('- Try not to die, plebeian', 250, 400);
    }
  }, {
    key: 'animate',
    value: function animate() {
      var snake = this.snake;
      var food = this.food;

      this.handleSnake(snake, food);
      snake.drawSnake(this.ctx);
      food.draw(this.ctx);
    }
  }, {
    key: 'generateNewSnake',
    value: function generateNewSnake() {
      this.snake = new Snake(200, 40, 20, 20, 'black', 'rgb(164, 194,  61)');
      this.food = new Food(Math.floor(Math.random() * (24 - 1)) + 1, Math.floor(Math.random() * (24 - 1)) + 1, 20, 20, 'black', 'rgb(164, 194,  61)');
      this.direction = 'right';
      this.speed = 450;
    }
  }, {
    key: 'handleSnake',
    value: function handleSnake(snake, food) {
      var canvas = this.ctx.canvas;


      snake.collidesWithSelf();
      var collision = snake.selfCollide;

      if (snake.isCollidingWithWall(canvas.width, canvas.height)) {
        this.endGame();
      } else if (snake.isCollidingWith(food, this.direction)) {
        this.increaseScore();
        this.reproduceFood(food);
        snake.checkFoodCollision(true, this.direction);
      } else if (collision === true) {
        this.endGame();
      } else {
        snake.move(this.direction);
      }
    }
  }, {
    key: 'reproduceFood',
    value: function reproduceFood(food) {
      var _this = this;

      this.ctx.clearRect(food.x, food.y, food.width, food.height);
      var snake = this.snake;

      snake.snakeBlocks.forEach(function (iteration) {
        _this.checkFoodAgainstSnake(iteration);
      });
    }
  }, {
    key: 'checkFoodAgainstSnake',
    value: function checkFoodAgainstSnake(iteration, newFood) {
      do {
        newFood = new Food(Math.floor(Math.random() * (24 - 1)) + 1, Math.floor(Math.random() * (24 - 1)) + 1, 20, 20, 'black');
        this.food = newFood;
      } while (newFood.x === iteration[0] && newFood.y === iteration[1]);
    }
  }, {
    key: 'increaseScore',
    value: function increaseScore() {
      var scoreBox = document.querySelector('.score');

      this.score += 10;
      scoreBox.innerText = this.score;

      if (this.score % 50 === 0) {
        this.speed = this.speed - 50;
      } else {
        return;
      }
    }
  }, {
    key: 'decreaseLives',
    value: function decreaseLives() {
      var lifeCount = document.querySelector('.lives');

      if (this.lives > 0) {
        this.lives--;
        lifeCount.innerText = this.lives;
      } else if (this.lives === 0) {
        return;
      }
    }
  }, {
    key: 'endGame',
    value: function endGame() {
      this.gameOver = true;
    }
  }, {
    key: 'resetInfo',
    value: function resetInfo() {
      this.lives = 5;
      this.score = 0;
    }
  }, {
    key: 'isOver',
    value: function isOver() {
      return this.gameOver;
    }
  }, {
    key: 'togglePause',
    value: function togglePause() {
      this.paused = !this.paused;
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(e) {
      e.preventDefault();

      if (e.key === 'ArrowRight' && this.direction !== 'left') {
        this.direction = 'right';
      } else if (e.key === 'ArrowLeft' && this.direction !== 'right') {
        this.direction = 'left';
      } else if (e.key === 'ArrowDown' && this.direction !== 'up') {
        this.direction = 'down';
      } else if (e.key === 'ArrowUp' && this.direction !== 'down') {
        this.direction = 'up';
      }
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./lib/GamePiece.js":
/*!**************************!*\
  !*** ./lib/GamePiece.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function GamePiece(x, y, height, width, color) {
    _classCallCheck(this, GamePiece);

    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
  }

  _createClass(GamePiece, [{
    key: "draw",
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          color = this.color;


      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
    }
  }]);

  return GamePiece;
}();

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Game = __webpack_require__(/*! ./Game */ "./lib/Game.js");
var canvas = document.querySelector('#game');
var ctx = canvas.getContext('2d');
var game = new Game(ctx);
var score = document.querySelector('.score');
var lives = document.querySelector('.lives');

window.onload = game.drawTitle(ctx);
window.addEventListener('keyup', startGame);
document.addEventListener('keydown', handleKeyPress);

function startGame(e) {
  var lifeCount = lives.innerText;

  if (e.key === 'Enter' && lifeCount > '0') {
    window.requestAnimationFrame(gameLoop);
  } else if (e.key === 'Enter' && lifeCount === '0') {
    lives.innerText = 5;
    score.innerText = 0;
    game.resetInfo();
    window.requestAnimationFrame(gameLoop);
  } else {
    return;
  }
}

function gameLoop() {

  if (game.isOver() && game.lives > 1) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTryAgain();
    game.decreaseLives();
    game.generateNewSnake();
    game.gameOver = false;
    return;
  } else if (game.isOver() && game.lives === 1) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStartOver();
    game.generateNewSnake();
    game.decreaseLives();
    game.gameOver = false;
    return;
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.animate();
  }

  window.setTimeout(gameLoop, game.speed);
}

function drawTryAgain() {
  ctx.font = '52px VT323';
  ctx.textAlign = 'center';
  ctx.fillText('YOU SUCK', 250, 210);
  ctx.fillText('PRESS ENTER TO', 250, 260);
  ctx.fillText('TRY AGAIN', 250, 310);
}

function drawStartOver() {
  ctx.font = '52px VT323';
  ctx.textAlign = 'center';
  ctx.fillText('YOU DEAD', 250, 210);
  ctx.fillText('PRESS ENTER TO', 250, 260);
  ctx.fillText('START ANEW', 250, 310);
}

function handleKeyPress(e) {
  game.handleKeyPress(e);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Jsb2NrLmpzIiwid2VicGFjazovLy8uL2xpYi9Gb29kLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lUGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdhbWVQaWVjZSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiYm9yZGVyQ29sb3IiLCJzZWxmQ29sbGlkZSIsInNuYWtlVGFpbCIsInNuYWtlQmxvY2tzIiwicHVzaCIsImN0eCIsImkiLCJsZW5ndGgiLCJkcmF3Iiwic25ha2UiLCJzbmFrZUJvZHkiLCJmaWx0ZXIiLCJoZWFkbGVzc1NuYWtlIiwiZm9yRWFjaCIsImJvZHlCbG9ja3MiLCJjaGVja1NlbGZDb2xsaXNpb24iLCJzbmFrZUhlYWQiLCJzbmFrZUJsb2NrIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdHJva2VTdHlsZSIsInN0cm9rZVJlY3QiLCJ2YWx1ZSIsImRpcmVjdGlvbiIsImdyb3dTbmFrZSIsIm1vdmUiLCJuZXh0UG9zaXRpb24iLCJzbGljZSIsInVuc2hpZnQiLCJlbmRCbG9ja1JpZ2h0IiwicG9wIiwibmV3QmxvY2siLCJvYmplY3QiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsIlNuYWtlIiwiRm9vZCIsInBhdXNlZCIsImdhbWVPdmVyIiwic3BlZWQiLCJzY29yZSIsImxpdmVzIiwiZm9vZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJmaWxsVGV4dCIsImRyYXdDb250cm9sVGl0bGUiLCJkcmF3Q29udHJvbHMiLCJoYW5kbGVTbmFrZSIsImRyYXdTbmFrZSIsImNhbnZhcyIsImNvbGxpZGVzV2l0aFNlbGYiLCJjb2xsaXNpb24iLCJpc0NvbGxpZGluZ1dpdGhXYWxsIiwiZW5kR2FtZSIsImlzQ29sbGlkaW5nV2l0aCIsImluY3JlYXNlU2NvcmUiLCJyZXByb2R1Y2VGb29kIiwiY2hlY2tGb29kQ29sbGlzaW9uIiwiY2xlYXJSZWN0IiwiaXRlcmF0aW9uIiwiY2hlY2tGb29kQWdhaW5zdFNuYWtlIiwibmV3Rm9vZCIsInNjb3JlQm94IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJUZXh0IiwibGlmZUNvdW50IiwiZSIsInByZXZlbnREZWZhdWx0Iiwia2V5IiwiR2FtZSIsImdldENvbnRleHQiLCJnYW1lIiwid2luZG93Iiwib25sb2FkIiwiZHJhd1RpdGxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0R2FtZSIsImhhbmRsZUtleVByZXNzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2FtZUxvb3AiLCJyZXNldEluZm8iLCJpc092ZXIiLCJkcmF3VHJ5QWdhaW4iLCJkZWNyZWFzZUxpdmVzIiwiZ2VuZXJhdGVOZXdTbmFrZSIsImRyYXdTdGFydE92ZXIiLCJhbmltYXRlIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVB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MkI7QUFDekJLLE9BQUtNLGNBQUwsQ0FBb0JYLENBQXBCO0FBQ0QsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBTbmFrZSBleHRlbmRzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yLCBib3JkZXJDb2xvcikge1xuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKTtcbiAgICB0aGlzLmJvcmRlckNvbG9yID0gYm9yZGVyQ29sb3I7XG4gICAgdGhpcy5zZWxmQ29sbGlkZSA9IGZhbHNlO1xuICAgIHRoaXMuc25ha2VUYWlsID0gWzE2MCwgeV07XG4gICAgdGhpcy5zbmFrZUJsb2NrcyA9IFtdO1xuICAgIHRoaXMuc25ha2VCbG9ja3MucHVzaChbeCwgeV0pO1xuICAgIHRoaXMuc25ha2VCbG9ja3MucHVzaChbMTgwLCB5XSk7XG4gICAgdGhpcy5zbmFrZUJsb2Nrcy5wdXNoKFsxNjAsIHldKTtcbiAgfSBcblxuICBkcmF3U25ha2UoY3R4KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNuYWtlQmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmRyYXcoY3R4LCB0aGlzLnNuYWtlQmxvY2tzW2ldKTtcbiAgICB9XG4gIH1cblxuICBjb2xsaWRlc1dpdGhTZWxmKCkge1xuICAgIGxldCBzbmFrZSA9IHRoaXMuc25ha2VCbG9ja3M7XG4gICAgbGV0IHNuYWtlQm9keSA9IHNuYWtlLmZpbHRlcigoaGVhZGxlc3NTbmFrZSkgPT4ge1xuICAgICAgcmV0dXJuIGhlYWRsZXNzU25ha2UgIT09IHNuYWtlWzBdO1xuICAgIH0pO1xuICAgIFxuICAgIHNuYWtlQm9keS5mb3JFYWNoKChib2R5QmxvY2tzKSA9PiB7XG4gICAgICB0aGlzLmNoZWNrU2VsZkNvbGxpc2lvbihib2R5QmxvY2tzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNoZWNrU2VsZkNvbGxpc2lvbihib2R5QmxvY2tzKSB7XG4gICAgbGV0IHNuYWtlSGVhZCA9IHRoaXMuc25ha2VCbG9ja3NbMF07XG5cbiAgICBpZiAoYm9keUJsb2Nrc1swXSA9PT0gc25ha2VIZWFkWzBdICYmIGJvZHlCbG9ja3NbMV0gPT09IHNuYWtlSGVhZFsxXSkge1xuICAgICAgdGhpcy5zZWxmQ29sbGlkZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBkcmF3KGN0eCwgc25ha2VCbG9jaykge1xuICAgIGNvbnN0IHtoZWlnaHQsIHdpZHRoLCBjb2xvciwgYm9yZGVyQ29sb3IgfSA9IHRoaXM7XG4gICAgbGV0IHggPSBzbmFrZUJsb2NrWzBdO1xuICAgIGxldCB5ID0gc25ha2VCbG9ja1sxXTtcbiAgICBcbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGJvcmRlckNvbG9yO1xuICAgIGN0eC5zdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgY2hlY2tGb29kQ29sbGlzaW9uKHZhbHVlLCBkaXJlY3Rpb24pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZ3Jvd1NuYWtlKCk7XG4gICAgICB0aGlzLm1vdmUoZGlyZWN0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb3ZlKGRpcmVjdGlvbik7XG4gICAgfVxuICB9XG5cbiAgbW92ZShkaXJlY3Rpb24pIHtcbiAgICBsZXQgbmV4dFBvc2l0aW9uID0gdGhpcy5zbmFrZUJsb2Nrc1swXS5zbGljZSgpO1xuICAgICBcbiAgICBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICBuZXh0UG9zaXRpb25bMF0gKz0gMjA7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgbmV4dFBvc2l0aW9uWzBdID0gbmV4dFBvc2l0aW9uWzBdIC0gMjA7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd1cCcpIHtcbiAgICAgIG5leHRQb3NpdGlvblsxXSA9IG5leHRQb3NpdGlvblsxXSAtIDIwO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgIG5leHRQb3NpdGlvblsxXSArPSAyMDtcbiAgICB9XG5cbiAgICB0aGlzLnNuYWtlQmxvY2tzLnVuc2hpZnQobmV4dFBvc2l0aW9uKTtcbiAgICBsZXQgZW5kQmxvY2tSaWdodCA9IHRoaXMuc25ha2VCbG9ja3MucG9wKCk7XG5cbiAgICB0aGlzLnNuYWtlVGFpbCA9IGVuZEJsb2NrUmlnaHQ7XG4gIH1cbiAgXG4gIGdyb3dTbmFrZSgpIHtcbiAgICBsZXQgbmV3QmxvY2sgPSB0aGlzLnNuYWtlVGFpbDtcblxuICAgIHRoaXMuc25ha2VCbG9ja3MucHVzaChuZXdCbG9jayk7XG4gIH1cblxuICBpc0NvbGxpZGluZ1dpdGgob2JqZWN0LCBkaXJlY3Rpb24pIHtcbiAgICBsZXQgc25ha2VIZWFkID0gdGhpcy5zbmFrZUJsb2Nrc1swXTtcbiAgICBsZXQgc25ha2VCb2R5ID0gdGhpcy5zbmFrZUJsb2Nrc1sxXTtcblxuICAgIGlmIChzbmFrZUhlYWRbMF0gPT09IChvYmplY3QueCAtIG9iamVjdC53aWR0aCkgLSAyMCAmJiBzbmFrZUhlYWRbMV0gPT09IG9iamVjdC55ICYmIGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChzbmFrZUhlYWRbMF0gPT09IChvYmplY3QueCArIG9iamVjdC53aWR0aCkgKyAyMCAmJiBzbmFrZUhlYWRbMV0gPT09IG9iamVjdC55ICYmIGRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHNuYWtlSGVhZFswXSA9PT0gb2JqZWN0LnggJiYgc25ha2VIZWFkWzFdID09PSAob2JqZWN0LnkgKyBvYmplY3QuaGVpZ2h0KSArIDIwICYmIGRpcmVjdGlvbiA9PT0gJ3VwJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChzbmFrZUhlYWRbMF0gPT09IG9iamVjdC54ICYmIHNuYWtlSGVhZFsxXSA9PT0gKG9iamVjdC55IC0gb2JqZWN0LmhlaWdodCkgLSAyMCAmJiBkaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChzbmFrZUhlYWRbMF0gPT09IG9iamVjdC54ICYmIHNuYWtlSGVhZFsxXSA9PT0gb2JqZWN0LnkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoc25ha2VCb2R5WzBdID09PSBvYmplY3QueCAmJiBzbmFrZUJvZHlbMV0gPT09IG9iamVjdC55KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICB9XG5cbiAgaXNDb2xsaWRpbmdXaXRoV2FsbChjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KSB7XG4gICAgbGV0IHNuYWtlSGVhZCA9IHRoaXMuc25ha2VCbG9ja3NbMF07XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIHNuYWtlSGVhZFswXSA8IDAgfHxcbiAgICAgIHNuYWtlSGVhZFswXSArICh0aGlzLndpZHRoKSA+IGNhbnZhc1dpZHRoIHx8XG4gICAgICBzbmFrZUhlYWRbMV0gPCAwIHx8IFxuICAgICAgc25ha2VIZWFkWzFdICsgKHRoaXMuaGVpZ2h0KSA+IGNhbnZhc0hlaWdodFxuICAgICk7XG4gIH1cbiAgXG59OyIsImNvbnN0IEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4vR2FtZVBpZWNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgRm9vZCBleHRlbmRzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yLCBib3JkZXJDb2xvcikge1xuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKTtcbiAgICB0aGlzLnggPSB4ICogMjA7XG4gICAgdGhpcy55ID0geSAqIDIwO1xuICAgIHRoaXMuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvcjtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3Qge3gsIHksIGhlaWdodCwgd2lkdGgsIGJvcmRlckNvbG9yIH0gPSB0aGlzO1xuXG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGJvcmRlckNvbG9yO1xuICAgIGN0eC5zdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9IFxuXG59OyIsImNvbnN0IFNuYWtlID0gcmVxdWlyZSgnLi9CbG9jaycpO1xuY29uc3QgRm9vZCA9IHJlcXVpcmUoJy4vRm9vZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmRpcmVjdGlvbiA9ICdyaWdodCc7XG4gICAgdGhpcy5zcGVlZCA9IDQ1MDtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLmxpdmVzID0gNTtcbiAgICB0aGlzLnNuYWtlID0gbmV3IFNuYWtlKDIwMCwgNDAsIDIwLCAyMCwgJ2JsYWNrJywgJ3JnYigxNjQsIDE5NCwgIDYxKScpO1xuICAgIHRoaXMuZm9vZCA9IG5ldyBGb29kKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyNCAtIDEpKSArIDEsIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyNCAtIDEpKSArIDEsIDIwLCAyMCwgJ2JsYWNrJywgJ3JnYigxNjQsIDE5NCwgIDYxKScpO1xuICB9XG5cbiAgZHJhd1RpdGxlKGN0eCkge1xuICAgIGN0eC5mb250ID0gJzUycHggVlQzMjMnO1xuICAgIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICBjdHguZmlsbFRleHQoJ1BSRVNTIEVOVEVSIEtFWScsIDI1MCwgMTIwKTtcbiAgICBjdHguZmlsbFRleHQoJ1RPIFNUQVJUJywgMjUwLCAxNzApO1xuICAgIHRoaXMuZHJhd0NvbnRyb2xUaXRsZShjdHgpO1xuICB9XG5cbiAgZHJhd0NvbnRyb2xUaXRsZShjdHgpIHtcbiAgICBjdHguZm9udCA9ICc0MnB4IFZUMzIzJztcbiAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgY3R4LmZpbGxUZXh0KCdDb250cm9sczonLCAyNTAsIDI4MCk7XG4gICAgdGhpcy5kcmF3Q29udHJvbHMoY3R4KTtcbiAgfVxuXG4gIGRyYXdDb250cm9scyhjdHgpIHtcbiAgICBjdHguZm9udCA9ICczMHB4IFZUMzIzJztcbiAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgY3R4LmZpbGxUZXh0KCctIFVzZSBhcnJvdyBrZXlzIHRvIGNoYW5nZSBkaXJlY3Rpb24nLCAyNTAsIDM0MCk7XG4gICAgY3R4LmZpbGxUZXh0KCctIFRyeSBub3QgdG8gZGllLCBwbGViZWlhbicsIDI1MCwgNDAwKTtcbiAgfVxuXG4gIGFuaW1hdGUoKSB7XG4gICAgbGV0IHNuYWtlID0gdGhpcy5zbmFrZTtcbiAgICBsZXQgZm9vZCA9IHRoaXMuZm9vZDtcblxuICAgIHRoaXMuaGFuZGxlU25ha2Uoc25ha2UsIGZvb2QpO1xuICAgIHNuYWtlLmRyYXdTbmFrZSh0aGlzLmN0eCk7XG4gICAgZm9vZC5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG4gIGdlbmVyYXRlTmV3U25ha2UoKSB7XG4gICAgdGhpcy5zbmFrZSA9IG5ldyBTbmFrZSgyMDAsIDQwLCAyMCwgMjAsICdibGFjaycsICdyZ2IoMTY0LCAxOTQsICA2MSknKTtcbiAgICB0aGlzLmZvb2QgPSBuZXcgRm9vZChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjQgLSAxKSkgKyAxLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjQgLSAxKSkgKyAxLCAyMCwgMjAsICdibGFjaycsICdyZ2IoMTY0LCAxOTQsICA2MSknKTtcbiAgICB0aGlzLmRpcmVjdGlvbiA9ICdyaWdodCc7XG4gICAgdGhpcy5zcGVlZCA9IDQ1MDtcbiAgfVxuXG4gIGhhbmRsZVNuYWtlKHNuYWtlLCBmb29kKSB7XG4gICAgY29uc3QgeyBjYW52YXMgfSA9IHRoaXMuY3R4O1xuXG4gICAgc25ha2UuY29sbGlkZXNXaXRoU2VsZigpO1xuICAgIGxldCBjb2xsaXNpb24gPSBzbmFrZS5zZWxmQ29sbGlkZTtcblxuICAgIGlmIChzbmFrZS5pc0NvbGxpZGluZ1dpdGhXYWxsKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCkpIHtcbiAgICAgIHRoaXMuZW5kR2FtZSgpO1xuICAgIH0gZWxzZSBpZiAoc25ha2UuaXNDb2xsaWRpbmdXaXRoKGZvb2QsIHRoaXMuZGlyZWN0aW9uKSkge1xuICAgICAgdGhpcy5pbmNyZWFzZVNjb3JlKCk7XG4gICAgICB0aGlzLnJlcHJvZHVjZUZvb2QoZm9vZCk7XG4gICAgICBzbmFrZS5jaGVja0Zvb2RDb2xsaXNpb24odHJ1ZSwgdGhpcy5kaXJlY3Rpb24pO1xuICAgIH0gZWxzZSBpZiAoY29sbGlzaW9uID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmVuZEdhbWUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc25ha2UubW92ZSh0aGlzLmRpcmVjdGlvbik7XG4gICAgfVxuICB9XG5cbiAgcmVwcm9kdWNlRm9vZChmb29kKSB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KGZvb2QueCwgZm9vZC55LCBmb29kLndpZHRoLCBmb29kLmhlaWdodCk7XG4gICAgbGV0IHNuYWtlID0gdGhpcy5zbmFrZTtcblxuICAgIHNuYWtlLnNuYWtlQmxvY2tzLmZvckVhY2goKGl0ZXJhdGlvbikgPT4ge1xuICAgICAgdGhpcy5jaGVja0Zvb2RBZ2FpbnN0U25ha2UoaXRlcmF0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNoZWNrRm9vZEFnYWluc3RTbmFrZShpdGVyYXRpb24sIG5ld0Zvb2QpIHtcbiAgICBkbyB7XG4gICAgICBuZXdGb29kID0gbmV3IEZvb2QoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI0IC0gMSkpICsgMSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI0IC0gMSkpICsgMSwgMjAsIDIwLCAnYmxhY2snKTtcbiAgICAgIHRoaXMuZm9vZCA9IG5ld0Zvb2Q7XG4gICAgfSB3aGlsZSAobmV3Rm9vZC54ID09PSBpdGVyYXRpb25bMF0gJiYgbmV3Rm9vZC55ID09PSBpdGVyYXRpb25bMV0pO1xuICB9XG5cbiAgaW5jcmVhc2VTY29yZSgpIHtcbiAgICBsZXQgc2NvcmVCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmUnKTtcblxuICAgIHRoaXMuc2NvcmUgKz0gMTA7XG4gICAgc2NvcmVCb3guaW5uZXJUZXh0ID0gdGhpcy5zY29yZTtcbiAgICBcbiAgICBpZiAodGhpcy5zY29yZSAlIDUwID09PSAwKSB7XG4gICAgICB0aGlzLnNwZWVkID0gdGhpcy5zcGVlZCAtIDUwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfSBcbiAgfVxuXG4gIGRlY3JlYXNlTGl2ZXMoKSB7XG4gICAgbGV0IGxpZmVDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXZlcycpO1xuXG4gICAgaWYgKHRoaXMubGl2ZXMgPiAwKSB7XG4gICAgICB0aGlzLmxpdmVzLS07XG4gICAgICBsaWZlQ291bnQuaW5uZXJUZXh0ID0gdGhpcy5saXZlcztcbiAgICB9IGVsc2UgaWYgKHRoaXMubGl2ZXMgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBlbmRHYW1lKCkge1xuICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICB9XG5cbiAgcmVzZXRJbmZvKCkge1xuICAgIHRoaXMubGl2ZXMgPSA1O1xuICAgIHRoaXMuc2NvcmUgPSAwOyBcbiAgfVxuXG4gIGlzT3ZlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nYW1lT3ZlcjtcbiAgfVxuXG4gIHRvZ2dsZVBhdXNlKCkge1xuICAgIHRoaXMucGF1c2VkID0gIXRoaXMucGF1c2VkO1xuICB9XG5cbiAgaGFuZGxlS2V5UHJlc3MoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgXG4gICAgaWYgKGUua2V5ID09PSAnQXJyb3dSaWdodCcgJiYgdGhpcy5kaXJlY3Rpb24gIT09ICdsZWZ0Jykge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnO1xuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd0xlZnQnICYmIHRoaXMuZGlyZWN0aW9uICE9PSAncmlnaHQnKSB7XG4gICAgICB0aGlzLmRpcmVjdGlvbiA9ICdsZWZ0JztcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJyAmJiB0aGlzLmRpcmVjdGlvbiAhPT0gJ3VwJykge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnZG93bic7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnICYmIHRoaXMuZGlyZWN0aW9uICE9PSAnZG93bicpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ3VwJztcbiAgICB9XG4gIH1cblxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGNvbnN0IHsgeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IgfSA9IHRoaXM7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbn07IiwiY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZScpO1xuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUnKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xubGV0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xubGV0IHNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlJyk7XG5sZXQgbGl2ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGl2ZXMnKTtcblxud2luZG93Lm9ubG9hZCA9IGdhbWUuZHJhd1RpdGxlKGN0eCk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBzdGFydEdhbWUpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleVByZXNzKTtcblxuZnVuY3Rpb24gc3RhcnRHYW1lKGUpIHtcbiAgbGV0IGxpZmVDb3VudCA9IGxpdmVzLmlubmVyVGV4dDtcblxuICBpZiAoZS5rZXkgPT09ICdFbnRlcicgJiYgbGlmZUNvdW50ID4gJzAnKSB7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdFbnRlcicgJiYgbGlmZUNvdW50ID09PSAnMCcpIHtcbiAgICBsaXZlcy5pbm5lclRleHQgPSA1O1xuICAgIHNjb3JlLmlubmVyVGV4dCA9IDA7XG4gICAgZ2FtZS5yZXNldEluZm8oKTtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2FtZUxvb3AgKCkge1xuXG4gIGlmIChnYW1lLmlzT3ZlcigpICYmIGdhbWUubGl2ZXMgPiAxKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGRyYXdUcnlBZ2FpbigpO1xuICAgIGdhbWUuZGVjcmVhc2VMaXZlcygpO1xuICAgIGdhbWUuZ2VuZXJhdGVOZXdTbmFrZSgpO1xuICAgIGdhbWUuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAoZ2FtZS5pc092ZXIoKSAmJiBnYW1lLmxpdmVzID09PSAxKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGRyYXdTdGFydE92ZXIoKTtcbiAgICBnYW1lLmdlbmVyYXRlTmV3U25ha2UoKTtcbiAgICBnYW1lLmRlY3JlYXNlTGl2ZXMoKTtcbiAgICBnYW1lLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBnYW1lLmFuaW1hdGUoKTtcbiAgfVxuXG4gIHdpbmRvdy5zZXRUaW1lb3V0KGdhbWVMb29wLCBnYW1lLnNwZWVkKTtcbn1cblxuZnVuY3Rpb24gZHJhd1RyeUFnYWluKCkge1xuICBjdHguZm9udCA9ICc1MnB4IFZUMzIzJztcbiAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICBjdHguZmlsbFRleHQoJ1lPVSBTVUNLJywgMjUwLCAyMTApO1xuICBjdHguZmlsbFRleHQoJ1BSRVNTIEVOVEVSIFRPJywgMjUwLCAyNjApO1xuICBjdHguZmlsbFRleHQoJ1RSWSBBR0FJTicsIDI1MCwgMzEwKTtcbn1cblxuZnVuY3Rpb24gZHJhd1N0YXJ0T3ZlcigpIHtcbiAgY3R4LmZvbnQgPSAnNTJweCBWVDMyMyc7XG4gIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgY3R4LmZpbGxUZXh0KCdZT1UgREVBRCcsIDI1MCwgMjEwKTtcbiAgY3R4LmZpbGxUZXh0KCdQUkVTUyBFTlRFUiBUTycsIDI1MCwgMjYwKTtcbiAgY3R4LmZpbGxUZXh0KCdTVEFSVCBBTkVXJywgMjUwLCAzMTApO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gIGdhbWUuaGFuZGxlS2V5UHJlc3MoZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9