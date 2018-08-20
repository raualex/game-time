const GamePiece = require('./GamePiece');

module.exports = class Food extends GamePiece {
  constructor(x, y, height, width, color, borderColor) {
    super(x, y, height, width, color);

    this.x = x * 20;
    this.y = y * 20;
    this.borderColor = borderColor;
  
  }

    draw(ctx) {
    const {x, y, height, width, color, borderColor } = this;

    // call parent class draw function
    super.draw(ctx);
 
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
  } 
}